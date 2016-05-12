/*************************************************************
 * 验证码按钮指令
 * 作者：杜颖
 * email：duy@kayak.com.cn
 * 日期：2015-09-23
 *
 * 使用方法如下所示：
 * 1) 在控制器里定义一个属性：
 *    $scope.verifyCodeFun = function() {
 *      console.log('post verify code');
 *    }
 *
 * 2) 在视图文件里添加如下代码来创建日期：
 *    <div verify-code-button-directive
 *         button-class="button-auto-class"      // 按钮样式。可选项， string
 *         count-down="5"                        // 倒计时时间。可选项， number, 默认值为90秒
 *         soon-click="true"                     // 第一次是否自动执行点击事件，当为true时，自动执行，否则必须手动点击按钮才执行
 *                                               // 点击事件。可选项, boolean，默认为true
 *         bind-click-event="verifyCodeFun()"    // 按钮的点击事件。可选项，绑定父作用域的自定义点击事件
 *    ></div>
 * */


kkFrontUtils.directive('verifyCodeButtonDirective', function($interval) {

    var _html = '<button ' +
        'class="button {{buttonClass}}" ' +
        'ng-click="clickEvent()" ' +
        'ng-disabled="buttonDisabled">' +
        '{{buttonText}}' +
        '</button>';

    return {
        restrict: 'A',
        template: _html,
        replace: true,
        scope: {
            buttonClass: '@',
            countDown: '@',
            soonClick: '@',
            bindClickEvent: '&'
        },
        controller: function($scope) {
            var _buttonText = '重新发送';
            $scope.buttonClass = $scope.buttonClass || '';
            $scope.countDown = $scope.countDown || 90;
            $scope.countDown = parseInt($scope.countDown);
            $scope.soonClick = $scope.soonClick || 'true';
            $scope.soonClick = $scope.soonClick === 'true' ? true : false;
            $scope.buttonDisabled = false;
            $scope.buttonText = $scope.soonClick ? _buttonText + ' (' + $scope.countDown + ')' : _buttonText;

            $scope.clickEvent = function() {
                $scope.bindClickEvent();
                $scope.buttonDisabled = true;
                var _countDown = $scope.countDown;
                $scope.buttonText = _buttonText + ' (' + _countDown + ')';
                var _intervalEvent = $interval(function() {
                    if (_countDown === 1) {
                        $scope.buttonText = _buttonText;
                        $scope.buttonDisabled = false;
                        $interval.cancel(_intervalEvent);
                    } else {
                        _countDown--;
                        $scope.buttonText = _buttonText + ' (' + _countDown + ')';
                    }
                }, 1000);
            };

            if ($scope.soonClick) {
                $scope.buttonDisabled = true;
                $scope.clickEvent();
            }
        }
    };
});
