/*
* 时间线指令
* @desc endTime为剩余时间，precent为百分比
*
*/
'use strict';
kkFrontUtils.directive('timeLine', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            'endTime': '@',
            'percent': '@'
        },
        template: '<div class="timeline">' +
        '<div class="active-line"></div>' +
        '<span class="end-time">剩余{{endTime}}</span>' +
        '</div>',
        link: function (scope, ele, attrs) {
            var clientWidth = document.body.clientWidth,
                activeLineDom = document.querySelector(".active-line"),
                endTimeDom = document.querySelector(".end-time"),
                endTimeWidth = endTimeDom.clientWidth;
            //计算方式为：(总宽度-剩余时间区块宽度)*剩余宽度的百分比
            //endTimeDom.style.left=(clientWidth-endTimeWidth)*attrs.percent+'px';
                activeLineDom.style.width = (clientWidth - endTimeWidth) * attrs.percent + 'px';
                endTimeDom.style.webkitTransform = ('translate3d(' + (clientWidth - endTimeWidth) *
                attrs.percent + 'px, 0, 0)');
        }
    }
});
