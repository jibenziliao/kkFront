/**
 * 安全键盘指令
 * @author dargonPaul on 2015/7/15.
 */
kkFrontUtils.directive('keyBoard', function () {
    return {
        restrict: 'EA',
        templateUrl: 'templates/kkFrontUtils/keyBoard.html',
        replace: true,
        link: function (scope, element, attrs) {
            var pwdIndex = -1;
            var pwdArr = ['one', 'two', 'three', 'four', 'five', 'six'];
            var showPwd = false;
            scope.showBoard = false;
            scope.showPwd = false;
            scope.pwd = {
                'one': '',
                'two': '',
                'three': '',
                'four': '',
                'five': '',
                'six': ''
            };
            /*scope.showPwdStr = function() {
               scope.showPwd = !showPwd;
            };*/
            scope.hidePwdStr = function () {
                scope.showPwd = false;
            };

            scope.showKeyBoard = function () {
                scope.showBoard = true;
                angular.element(document.querySelector(".buying-popup")).addClass("keyboard-on");
            };

            scope.hideKeyBoard = function () {
                scope.showBoard = false;
                angular.element(document.querySelector(".buying-popup")).removeClass("keyboard-on")

            };
            scope.printPwd = function (event) {
                if (pwdIndex >= 5) {
                    return false;
                }
                pwdIndex++;
                pwdStr = pwdArr[pwdIndex];
                scope.pwd[pwdStr] = event.target.innerHTML;

            };

            scope.deletePwd = function (event) {
                if (pwdIndex < 0) {
                    return false;
                }
                pwdStr = pwdArr[pwdIndex];
                scope.pwd[pwdStr] = '';
                pwdIndex--;
            };
        }
    }
});


