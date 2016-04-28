/**=========================================================
 * Module: ColorsRun
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .run(appRun);

    appRun.$inject = ['$rootScope', 'colors'];
    function appRun($rootScope, colors) {
      // 从模板中请求模板的颜色 {{colorByName('info')}}
      $rootScope.colorByName = colors.byName;
    }

})();
