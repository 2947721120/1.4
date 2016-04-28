/**=========================================================
 *模块：touchdragservice.js

*服务添加触控拖拽到一个DOM元素
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .service('touchDrag', touchDrag);

    touchDrag.$inject = ['$document', 'browser'];
    function touchDrag($document, browser) {
      /*jshint这：真的*/
      var self = this;

      self.touchHandler = function (event) {
          var touch = event.changedTouches[0];

          var simulatedEvent = document.createEvent('MouseEvent');
              simulatedEvent.initMouseEvent({
              touchstart: 'mousedown',
              touchmove: 'mousemove',
              touchend: 'mouseup'
          }[event.type], true, true, window, 1,
              touch.screenX, touch.screenY,
              touch.clientX, touch.clientY, false,
              false, false, false, 0, null);

          touch.target.dispatchEvent(simulatedEvent);
          event.preventDefault();
      };

      self.addTo = function (element) {
        element = element || $document;
        if(browser.mobile) {
          element.addEventListener('touchstart', this.touchHandler, true);
          element.addEventListener('touchmove', this.touchHandler, true);
          element.addEventListener('touchend', this.touchHandler, true);
          element.addEventListener('touchcancel', this.touchHandler, true);
        }
      };
    }

})();
