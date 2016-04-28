/**=========================================================
*模块：标题案例Filter.js*转换任何情况下标题
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .filter('titlecase', titlecase);

    function titlecase() {
        return filterFilter;

        ////////////////
        function filterFilter(params) {
          params = ( params === undefined || params === null ) ? '' : params;
          return params.toString().toLowerCase().replace( /\b([a-z])/g, function(ch) {
              return ch.toUpperCase();
          });
        }
    }

})();
