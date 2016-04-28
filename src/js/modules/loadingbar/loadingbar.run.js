/**=========================================================
 * Module: 进度条跑
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .run(appRun);
    /* @ngInject */
    function appRun($rootScope, $timeout, cfpLoadingBar) {
      // 加载杆的过渡

      var latency;
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          if( document.querySelector('.app-container > section') ) // 检查容器是否存在
            latency = $timeout(function() {
              cfpLoadingBar.start();
            }, 50); // 设置延迟阈值
      });
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout.cancel(latency);
            cfpLoadingBar.complete();
          });
      });

    }
    appRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];

})();
