(function() {
  'use strict';

  angular
    .module('paringandhiInfo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
