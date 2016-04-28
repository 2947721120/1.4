/**=========================================================
 *模块：AnimateEnabledDirective.js*启用或禁用ngAnimate与指令元素
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];
    function animateEnabled($animate) {

      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          scope.$watch(function () {
            return scope.$eval(attrs.animateEnabled, scope);
          }, function (newValue) {
            $animate.enabled(!!newValue, element);
          });
        }
      };
    }
})();

