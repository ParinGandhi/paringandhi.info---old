(function () {
    'use strict';

    angular
        .module('paringandhiInfo')
        .controller('MortgageController', function ($log, $rootScope, toastr) {
            $rootScope.projectName = "mortgage";
            $rootScope.fontName = "Titillium+Web";

            var vm = this;
            vm.showTable = false;
            vm.chartData = [];

            vm.tableInfo = [];
            var eachPayment;
            var validationSuccess;

            function validate(validateInput, message) {
                if (angular.isDefined(validateInput) && validateInput !== '') {
                    validationSuccess = true;
                } else {
                    validationSuccess = false;
                    toastr.error(message, {
                        progressBar: false,
                        timeOut: 0
                    });
                }
            }


            vm.calculate = function () {
                toastr.clear();
                validate(vm.loanAmount, "Please enter a valid loan amount");
                validate(vm.interest, "Please enter a valid interest amount");
                validate(vm.term, "Please enter a valid term length");

                if (validationSuccess) {
                    NProgress.start();
                    createTable();
                    drawChart();
                    NProgress.done();

                }
            };

        function createTable() {
            var term = Math.floor(vm.term * 12);
                    var monthlyInterest = (vm.interest / 12) / 100;

                    //var something = (monthlyInterest * vm.loanAmount * Math.pow((1 + monthlyInterest), vm.term)) / (Math.pow((1 + monthlyInterest), vm.term) - 1);
                    vm.monthlyPayment = (monthlyInterest * vm.loanAmount * Math.pow((1 + monthlyInterest), term)) / (Math.pow((1 + monthlyInterest), term) - 1);
                    $log.log(vm.monthlyPayment);
                    vm.totalPayment = vm.monthlyPayment * term;
                    $log.log(vm.totalPayment);
                    var remainingBalance = vm.loanAmount;

                    for (var i = 0; i < term; i++) {
                        eachPayment = {};
                        eachPayment.payment = i + 1;
                        eachPayment.interest = remainingBalance * monthlyInterest;
                        eachPayment.principle = vm.monthlyPayment - eachPayment.interest;
                        eachPayment.remainingBalance = remainingBalance - eachPayment.principle;
                        remainingBalance = eachPayment.remainingBalance;
                        vm.tableInfo.push(eachPayment);
                        vm.chartDetails = {};
                        vm.chartDetails.payment = eachPayment.payment;
                        vm.chartDetails.interest = Math.round(eachPayment.interest * 100) / 100;
                        vm.chartDetails.principle = Math.round(eachPayment.principle * 100) / 100;
                        vm.chartData.push(vm.chartDetails);

                    }

                    $log.log("Logging vm.tableInfo");
                    $log.log(vm.tableInfo);
                    $log.log("Logging vm.chartData");
                    $log.log(vm.chartData);
                    vm.showTable = true;
        }

        function drawChart() {
            var chart = AmCharts.makeChart("chartdiv", {
                        "type": "serial",
                        "theme": "dark",
                        "marginTop": 0,
                        "marginRight": 80,
                        "dataProvider": vm.chartData,
                        "valueAxes": [{
                            "axisAlpha": 0,
                            "position": "left"
    }],
                        "graphs": [{
                            "id": "g1",
                            "balloonText": "Principle (Payment [[category]])<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                            "bullet": "round",
                            "bulletSize": 8,
                            "lineColor": "#B0DE09",
                            "lineThickness": 2,
                            "negativeLineColor": "#637bb6",
                            "type": "smoothedLine",
                            "valueField": "principle"
    }, {
                            "id": "g2",
                            "balloonText": "Interest (Payment [[category]])<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                            "bullet": "square",
                            "bulletSize": 8,
                            "lineColor": "#FF6600",
                            "lineThickness": 2,
                            "negativeLineColor": "#637bb6",
                            "type": "smoothedLine",
                            "valueField": "interest"
    }],
                        "chartScrollbar": {
                            "graph": "g1",
                            "gridAlpha": 0,
                            "color": "#ffffff",
                            "scrollbarHeight": 55,
                            "backgroundAlpha": 0,
                            "selectedBackgroundAlpha": 0.1,
                            "selectedBackgroundColor": "#888888",
                            "graphFillAlpha": 0,
                            "autoGridCount": true,
                            "selectedGraphFillAlpha": 0,
                            "graphLineAlpha": 0.2,
                            "graphLineColor": "#c2c2c2",
                            "selectedGraphLineColor": "#888888",
                            "selectedGraphLineAlpha": 1

                        },
                        "chartCursor": {
                            "cursorAlpha": 0,
                            "valueLineEnabled": true,
                            "valueLineBalloonEnabled": true,
                            "valueLineAlpha": 0.5,
                            "fullWidth": true
                        },
                        "categoryField": "payment",
                        "categoryAxis": {
                            "parseDates": false,
                            "minorGridAlpha": 0.1,
                            "minorGridEnabled": true
                        },
                        "export": {
                            "enabled": true
                        }
                    });

                    chart.addListener("rendered", zoomChart);
                    if (chart.zoomChart) {
                        chart.zoomChart();
                    }

                    function zoomChart() {
                        chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
                    }
        }

        }); // End MainController

})();
