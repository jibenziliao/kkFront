/**
 * 提示信息指令
 * @desc配置相关参数后，触发提示后，提示框会从header下方滑出，
 * 指定时间（在常量中配置）后回弹消失
 *
 */
kkFrontUtils.directive('errorInfo',
    ['PublicTips', '$timeout','$rootScope', function (PublicTips, $timeout,$rootScope) {
        return {
            restrict: 'A',
            replace: true,
            require:'?ngModel',
            scope: {
                tipInfo: '@',
                tipClass:'@',
                errorShow:'@'
            },
            template: '<div class="tip-warning {{tipClass}} {{errorShow}}">' +
            '<i class="ion-information-circled icon-small"></i>' +
            '{{netWorkInfo}}{{tipInfo}}'+
            '</div>',
            link: function (scope, element, attrs,ngModel) {
                //断网提醒
                $rootScope.$watch("appNetWork", function (newVl,oldVl) {
                    if(!newVl){
                        scope.netWorkInfo = PublicTips.WARN_INFO;
                    }else{
                        scope.netWorkInfo = '';
                    }
                });
                //非断网提醒3秒钟（持续时间可在常量中配置）消失
                $rootScope.$watch("tipShow", function (newVl,oldVl) {
                    if(newVl){
                        $timeout(function () {
                            $rootScope.tipShow = false;
                        },PublicTips.WARN_DELAY);
                    }
                });

            }
        };
    }]);
