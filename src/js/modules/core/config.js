/**=========================================================
 * coreconfig模块。
 =========================================================*/
(function () {
  'use strict';

  angular
    .module('naut')
    .config(commonConfig)
    .config(lazyLoadConfig);

  // 通用对象访问
  commonConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
  function commonConfig($controllerProvider, $compileProvider, $filterProvider, $provide) {

    var app = angular.module('naut');
    app.controller = $controllerProvider.register;
    app.directive  = $compileProvider.directive;
    app.filter     = $filterProvider.register;
    app.factory    = $provide.factory;
    app.service    = $provide.service;
    app.constant   = $provide.constant;
    app.value      = $provide.value;

  }

  // 懒加载配置

  lazyLoadConfig.$inject = ['$ocLazyLoadProvider', 'VENDOR_ASSETS'];
  function lazyLoadConfig($ocLazyLoadProvider, VENDOR_ASSETS) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
      modules: VENDOR_ASSETS.modules
    });

  }

})();


