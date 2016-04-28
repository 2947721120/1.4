/**=========================================================
 * Module: SettingsController.js
 * Handles app setting
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('SettingsController', SettingsController);
    /* @ngInject */
    function SettingsController(settings) {
      var vm = this;
      // 恢复/保存布局设置
      settings.loadAndWatch();

      // 设置面板设置的范围
      vm.themes = settings.availableThemes();
      vm.setTheme = settings.setTheme;

    }
    SettingsController.$inject = ['settings'];
})();
