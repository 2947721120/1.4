/**=========================================================
 * Module: 路线config.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .config(routesConfig);

    routesConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', 'RouteProvider'];
    function routesConfig($locationProvider, $stateProvider, $urlRouterProvider, Route) {

      //使用HTML5 History API
      $locationProvider.html5Mode(false);

      //默认路由

      $urlRouterProvider.otherwise('/app/dashboard');

      // 应用线路状态
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: Route.base('app.html'),
          resolve: {
            _assets: Route.require('icons', 'toaster', 'animate')
          }
        })
        .state('app.dashboard', {
          url: '/dashboard',
          templateUrl: Route.base('dashboard.html'),
          resolve: {}
        })
      // 布局停靠
      .state('app-dock', {
        url: '/dock',
        abstract: true,
        templateUrl: Route.base('app-dock.html'),
        resolve: {
          assets: Route.require('icons', 'toaster', 'animate')
        }
      })
        .state('app-dock.dashboard', {
          url: '/dashboard',
          templateUrl: Route.base('dashboard.html'),
          resolve: {
          }
        })
      // 全高布局
      .state('app-fh', {
        url: '/fh',
        abstract: true,
        templateUrl: Route.base('app-fh.html'),
        resolve: {
          assets: Route.require('icons', 'toaster', 'animate')
        }

      })
        .state('app-fh.columns', {
          url: '/columns',
          templateUrl: Route.base('layout.columns.html')
        })
    }

})();

