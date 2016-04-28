/**=========================================================
 * Module: 供应商的资产Constant.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .constant('VENDOR_ASSETS', {
            //基于jQuery和独立脚本

            scripts: {
              'animate':            ['vendor/animate.css/animate.min.css'],
              'icons':              ['vendor/font-awesome/css/font-awesome.min.css',
                                     'vendor/weather-icons/css/weather-icons.min.css',
                                     'vendor/feather/webfont/feather-webfont/feather.css']
            },
            // 角模块脚本（名字是被注入的模块名称）
            modules: [
              {name: 'toaster',           files: ['vendor/angularjs-toaster/toaster.js',
                                                  'vendor/angularjs-toaster/toaster.css']}
            ]

        });

})();

