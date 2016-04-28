/**=========================================================
 * Module: climacon.js
 * Include any animated weather icon from Climacon
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .directive('climacon', climacon);
    
    function climacon() {

      var SVG_PATH = 'vendor/animated-climacons/svgs/',
          SVG_EXT = '.svg';

      return {
        restrict: 'EA',
        link: link
      };
      
      function link(scope, element, attrs) {
        
        var color  = attrs.color  || '#000',
            name   = attrs.name   || 'sun',
            width  = attrs.width  || 20,
            height = attrs.height || 20;

        //SVG表示请求
        $.get(SVG_PATH + name + SVG_EXT).then(svgLoaded, svgError);

        // 如果请求成功把它作为在线SVG可以风格
        function svgLoaded(xml) {
          var svg = angular.element(xml).find('svg');

          svg.css({
            'width':  width,
            'height': height
          });
          svg.find('.climacon_component-stroke').css('fill', color);

          element.append(svg);
        }
        // 如果不写留言
        function svgError() {
          element.text('Error loading SVG: ' + name);
        }

      }
    }
})();
