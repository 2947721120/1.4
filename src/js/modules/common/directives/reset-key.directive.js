/**=========================================================
 *模块：ResetKeyDirective.js
 *通过移除元素点击从浏览器中存储的关键
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('naut')
        .directive('resetKey', resetKey);
    
    resetKey.$inject = ['$state', '$rootScope'];
    function resetKey($state, $rootScope) {

      return {
        restrict: 'EA',
        link: link
      };
      
      function link(scope, element, attrs) {
        
        var resetKey = attrs.resetKey;

        element.on('click', function (e) {
            e.preventDefault();

            if(resetKey) {
              delete $rootScope.$storage[resetKey];
              $state.go($state.current, {}, {reload: true});
            }
            else {
              $.error('复位没有指定存储密钥.');
            }
        });
      }
    }

})();
