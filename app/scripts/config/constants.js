/*
* 常量
* @author keyy 2015-12-1 18:08:58
* 
*/
'use strict';
kkFrontDemo.constant('ApiEndpoint', {

}).constant('PublicTips', {
    HIDE_ASSET: false,
    WARN_DELAY: 3000,
    WARN_INFO:'世上最遥远的距离就是连不上网'
}).constant('ChartTips', {
    titles: {
        padding: 15,
        text: '七日年化收益走势',
        textStyle: {fontSize: 12, fontWeight: 'normal', color: '#aaa'}
    },
    backgroundColor: 'white',
    grid: {
        x: '10%',
        y: '15%',
        x2: '5%',
        y2: '10%',
        borderWidth: 0.5
    },
    xAxis0: {
        type: 'category',
        boundaryGap: false,
        axisLine: {show: false},
        axisLabel: {interval: 0},
        axisTick: {show: false}
    }
    ,
    yAxis0: {
        type: 'value',
        axisLine: {show: false}
    }
    ,
    series0: {
        name: '七日年化收益走势',
        type: 'line',
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#17b4f2',
                lineStyle: {color: '#17b4f2'},
                areaStyle: {type: 'default', color: 'rgba(231,247,254,0.6)'}
            }
        }
    }

});