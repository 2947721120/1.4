var colorAdminApp = angular.module('naut', [
    'ngRoute',
    'ngAnimate',
    'ngStorage',
    'ngCookies',
    'ngSanitize',
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    'ui.utils',
    'oc.lazyLoad',
    'cfp.loadingBar',
    'pascalprecht.translate'
]);
nautApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/dashboard');

    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: '/app/views/app.html',
            abstract: true
        })
        .state('app.dashboard', {
            url: '/dashboard',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.dock', {
            url: '/dock/dashboard',
            data: { pageTitle: 'app.dock' },
            templateUrl: '/app/views/app-dock.html'
        })
       /* .state('app.dashboard.v1', {
            url: '/v1',
            templateUrl: 'views/index.html',
            data: { pageTitle: 'Dashboard v1' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.css',
                            'assets/plugins/bootstrap-datepicker/css/datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/datepicker3.css',
                            'assets/plugins/gritter/css/jquery.gritter.css',
                            'assets/plugins/gritter/js/jquery.gritter.js',
                            'assets/plugins/flot/jquery.flot.min.js',
                            'assets/plugins/flot/jquery.flot.time.min.js',
                            'assets/plugins/flot/jquery.flot.resize.min.js',
                            'assets/plugins/flot/jquery.flot.pie.min.js',
                            'assets/plugins/sparkline/jquery.sparkline.js',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-world-mill-en.js',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js'
                        ] 
                    });
                }]
            }
        })
    nautApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);*/
 angular
    .module('naut')
     .directive('ngRoute', ngRoute)
     .directive('ngAnimate', ngAnimate)
     .directive('ngStorage', ngStorage)
     .directive('ngCookies', ngCookies)
     .directive('ngSanitize', ngSanitize)
     .directive('ui.bootstrap', ui.bootstrap)
     .directive('ui.router', ui.router)
     .directive('ui.utils', ui.utils)
     .directive('oc.lazyLoad', oc.lazyLoad)
     .directive('cfp.loadingBar', cfp.loadingBar)
     .directive('pascalprecht.translate', pascalprecht.translate)
    // .directive('ngRoute', ngRoute)
     
]);