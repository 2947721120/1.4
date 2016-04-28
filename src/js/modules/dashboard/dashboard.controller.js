/**=========================================================
 * controller.js：仪表板模块
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('DashboardController', DashboardController);
    
    function DashboardController() {
      var vm = this;
      vm.title = '罗特-引导+ AngularJS（子项目）';
      vm.text = '这个项目是一个典型的Web应用程序框架AngularJS。你可以用它来快速启动你的角webapp项目和这些项目的开发环境.' + 
                    '种子应用程序不做太多，只是显示了如何将一些控制器和视图一起.';
    }

})();
