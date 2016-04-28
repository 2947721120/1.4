/*!
 * 
 * Naut - Bootstrap Admin Theme + AngularJS
 * 
 * Author: @geedmo
 * Website: http://geedmo.com
 * License: https://wrapbootstrap.com/help/licenses
 * 
 */

angular
  .module('naut', [
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
     
