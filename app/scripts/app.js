'use strict';
 var kkFrontDemo=angular.module('kkFrontDemo', [
    'ionic',
    'ui.router',
    'ngIOS9UIWebViewPatch',
    'ngDialog',
    'ngCordova',
    'ngResource',
    'kkFrontUtils'
    ]);

kkFrontDemo.run(function($ionicPlatform,$rootScope,$location,$timeout,ngDialog){

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboardfor form inputs)
          if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
              //显示/隐藏键盘的完成按钮IOS
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
              /*如果在input获取焦点时，你app的内容（包含header）被挤到上面或视图以外，
              就需要尝试设置cordova.plugins.Keyboard.disableScroll(true)。
              这并不会在Ionic滚动视图中禁用滚动，相反，它会禁用原生的滚动溢出，当自动发生input获取焦点在键盘之后时。*/
              cordova.plugins.Keyboard.disableScroll(true);
          }
          if (window.StatusBar) {
              // org.apache.cordova.statusbar required
              StatusBar.styleLightContent();
          }
    });

    // add possible global event handlers here

    //初始化网络设置和消息提醒值
    $rootScope.appNetWork = true;
    $rootScope.tipShow = false;
    //添加手机断网和联网监听
    document.addEventListener("offline", offline, false);
    function offline() {
        $rootScope.appNetWork = false;
    }
    document.addEventListener("online", online, false);
    function online() {
        $rootScope.appNetWork = true;
    }

    //页面返回时关闭所有弹框（解决android手机在有弹框的页面时点击自带返回按钮弹框不关闭的bug）
    $rootScope.$on('$stateChangeStart', function () {
        ngDialog.closeAll();
    });
});

//超时时间配置的拦截器
kkFrontDemo.factory('HttpTimeoutInterceptor', function ($rootScope, $q) {
    return {
        'request': function (config) {
            config.timeout = 10000;
            return config;
        }
    };
});

//配置无网络连接时，刷新页面的控制器
kkFrontDemo.controller('refreshController', ['$scope', '$state',
    function ($scope, $state) {
        $scope.refreshDiv = function () {
            $state.go($state.current, {}, {reload: true});
        }
    }]);

kkFrontDemo.config(function($httpProvider, $stateProvider, $urlRouterProvider,$ionicConfigProvider,$logProvider) {
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-left');
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    
    $ionicConfigProvider.views.maxCache(0);

    $logProvider.debugEnabled(true);
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');
    $httpProvider.interceptors.push('HttpTimeoutInterceptor');

    $stateProvider
        .state('app',{
            url:'/app',
            abstract: true,
            templateUrl:'templates/tab.html'
        })
        .state('app.index',{
            url:'/index',
            views:{
                "app-index":{
                    templateUrl:'templates/example/index.html',
                }
            }
        })
        .state('app.mine',{
            url:'/mine',
            views:{
                "app-mine":{
                    templateUrl:'templates/example/mine.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/app/index');
});
