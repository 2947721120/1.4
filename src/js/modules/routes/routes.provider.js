/**=========================================================
*模块：Routeprovider.js*提供了根定义辅助功能
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .provider('Route', RouteProvider)
        ;
    
    RouteProvider.$inject = ['VENDOR_ASSETS'];
    function RouteProvider (VENDOR_ASSETS) {

    //此处设置的相对路径的基础
 //为所有的应用程序的意见
      this.base = function (uri) {
        return 'app/views/' + uri;
      };

     //生成传递脚本名称的解析对象//以前在constant.VENDOR资产配置
      this.require = function () {
        var _args = arguments;
        return ['$ocLazyLoad','$q', function ($ocLL, $q) {
            // 创建一个诺言链每个参数
            var promise = $q.when(1); //空头支票
            for(var i=0, len=_args.length; i < len; i ++){
              promise = andThen(_args[i]);
            }
            return promise;

            //创建承诺链动态
            function andThen(_arg) {
              // 还支持返回一个承诺的函数
              if(typeof _arg === 'function')
                  return promise.then(_arg);
              else
                  return promise.then(function() {
                    // 如果是一个模块，通过名称。如果不是，传递数组
                    var whatToLoad = getRequired(_arg);
                    //简单的错误检查
                    if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                    // 最后，返回一个承诺
                    return $ocLL.load( whatToLoad );
                  });
            }
            //检查并要求返回数据
            // 分析与表单模块项目[name: '', files: []]
            // 而且脚本文件简单数组（非角脚本）
            function getRequired(name) {
              if (VENDOR_ASSETS.modules)
                  for(var m in VENDOR_ASSETS.modules)
                      if(VENDOR_ASSETS.modules[m].name && VENDOR_ASSETS.modules[m].name === name)
                          return VENDOR_ASSETS.modules[m];
              return VENDOR_ASSETS.scripts && VENDOR_ASSETS.scripts[name];
            }

          }];
      }; // require

      // 没有必要的，只有在配置块用于路线
      this.$get = function(){};

    }

})();
