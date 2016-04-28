/**=========================================================
*模块：浏览器检测Service.js*浏览器检测服务
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .service('browser', service);

    function service() {
      /*jshint validthis:true*/
      var matched, browser = this;

      var uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(opr)[\/]([\w.]+)/.exec( ua ) ||
          /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
          /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
          /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
          /(msie) ([\w.]+)/.exec( ua ) ||
          ua.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
          ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
          [];

        var platform_match = /(ipad)/.exec( ua ) ||
          /(iphone)/.exec( ua ) ||
          /(android)/.exec( ua ) ||
          /(windows phone)/.exec( ua ) ||
          /(win)/.exec( ua ) ||
          /(mac)/.exec( ua ) ||
          /(linux)/.exec( ua ) ||
          /(cros)/i.exec( ua ) ||
          [];

        return {
          browser: match[ 3 ] || match[ 1 ] || '',
          version: match[ 2 ] || '0',
          platform: platform_match[ 0 ] || ''
        };
      };

      matched = uaMatch( window.navigator.userAgent );

      if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
        browser.versionNumber = parseInt(matched.version);
      }

      if ( matched.platform ) {
        browser[ matched.platform ] = true;
      }

      // 这些都被认为是移动平台，这意味着它们运行的移动浏览器
      if ( browser.android || browser.ipad || browser.iphone || browser[ 'windows phone' ] ) {
        browser.mobile = true;
      }

      // 这些都被视为桌面平台，意味着它们运行桌面浏览器
      if ( browser.cros || browser.mac || browser.linux || browser.win ) {
        browser.desktop = true;
      }

      //Chrome，Opera和Safari 15 +基于WebKit的浏览器
      if ( browser.chrome || browser.opr || browser.safari ) {
        browser.webkit = true;
      }

      // IE11 有一个新的令牌，所以我们将它分配MSIE避免断裂的变化
      if ( browser.rv )
      {
        var ie = 'msie';

        matched.browser = ie;
        browser[ie] = true;
      }

      // 歌剧是identified as +优15

      if ( browser.opr )
      {
        var opera = 'opera';

        matched.browser = opera;
        browser[opera] = true;
      }

      //Android的浏览器标记为Safari浏览器在Android。
      if ( browser.safari && browser.android )
      {
        var android = 'android';

        matched.browser = android;
        browser[android] = true;
      }

      // 指定名称和平台变量
      browser.name = matched.browser;
      browser.platform = matched.platform;


      return browser;
    }

})();
