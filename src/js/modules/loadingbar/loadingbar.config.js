/**=========================================================
 * 模块加载杆config.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .config(loadingBarConfig);
    
    /* @ngInject */
    function loadingBarConfig(cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeBar = true;
      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.latencyThreshold = 500;
      cfpLoadingBarProvider.parentSelector = '.app-container > header';
    }
    loadingBarConfig.$inject = ['cfpLoadingBarProvider'];

})();

