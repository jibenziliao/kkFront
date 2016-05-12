/*************************************************************
 * 文本框与密码框的切换指令
 * 作者：杜颖
 * email：duy@kayak.com.cn
 * 日期：2015-10-12
 *
 * 使用方法如下所示：
 * 1) 在视图文件里添加如下代码来创建日期：
 *    <div text-toggle-password-directive
 *         text-toggle-password-init-open-eye="true"      // 初始化按钮样式。可选项， string， true表示睁眼， flase表示闭眼
 *         text-toggle-password-button-class=""           // 按钮自定义样式。可选项， string
 *         text-toggle-password-open-eye-class=""         // 睁眼样式，可选项， string
 *         text-toggle-password-close-eye-class=""        // 闭眼样式，可选项， string
 *    ></div>
 *
 * 2) 在视图文件里，对需要控制显示效果的input表单对象，将其type属性值赋值为 {{textTogglePasswordInputTypes.*}}
 *    * 的可用值为 text 、 password 、 number 、 tel 、 email
 * */


kkFrontUtils.directive('textTogglePasswordDirective', function() {

    var _template = '<button class="button" ng-click="textTogglePasswordBindClickEvent()" ng-class="textTogglePasswordButtonClass">' +
        '<i class="{{textTogglePasswordInitEyeClass}} icon-mid"></i>' +
        '</button>';
    return {
        restrict: 'A',
        template: _template,
        replace: true,
        scope: false,
        controller: function($scope, $element, $attrs, $transclude) {
            var initOpenEye = $attrs.textTogglePasswordInitOpenEye || 'true',
                openEyeClass = $attrs.textTogglePasswordOpenEyeClass || 'ion-eye',
                closeEyeClass = $attrs.textTogglePasswordCloseEyeClass || 'ion-eye-disabled';

            function textTogglePasswordGetEyeClass(isOpen) {
                return isOpen ? openEyeClass : closeEyeClass;
            }

            $scope.textTogglePasswordButtonClass = $attrs.textTogglePasswordButtonClass || '';
            $scope.textTogglePasswordIconToggle = initOpenEye === 'true' ? true : false;
            $scope.textTogglePasswordInitEyeClass = textTogglePasswordGetEyeClass($scope.textTogglePasswordIconToggle);
            $scope.textTogglePasswordInputTypes = {
                password: $scope.textTogglePasswordIconToggle ? 'text' : 'password',
                text: $scope.textTogglePasswordIconToggle ? 'text' : 'password',
                number: $scope.textTogglePasswordIconToggle ? 'number' : 'password',
                tel: $scope.textTogglePasswordIconToggle ? 'tel' : 'password',
                email: $scope.textTogglePasswordIconToggle ? 'email' : 'password'
            };

            $scope.textTogglePasswordBindClickEvent = function() {
                $scope.textTogglePasswordIconToggle = !$scope.textTogglePasswordIconToggle;
                $scope.textTogglePasswordInitEyeClass = textTogglePasswordGetEyeClass($scope.textTogglePasswordIconToggle);
                $scope.textTogglePasswordInputTypes.password = $scope.textTogglePasswordIconToggle ? 'text' : 'password';
                $scope.textTogglePasswordInputTypes.text = $scope.textTogglePasswordIconToggle ? 'text' : 'password';
                $scope.textTogglePasswordInputTypes.number = $scope.textTogglePasswordIconToggle ? 'number' : 'password';
                $scope.textTogglePasswordInputTypes.tel = $scope.textTogglePasswordIconToggle ? 'tel' : 'password';
                $scope.textTogglePasswordInputTypes.email = $scope.textTogglePasswordIconToggle ? 'email' : 'password';
            };

        }
    };
});
