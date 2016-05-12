/**
 * 图表指令
 * @author shu on 2015/10/10.
 * @desc 在指令中配置部分参数，部分参数配置在常量中
 */
kkFrontUtils.directive('comnEchart',function(){
        return {
            restrict: 'A',
            scope: {
                title:'=',//图表标题主题
                backgroundColor:'=',
                tooltip:'=',
                grid:'=',
                xis:'=',
                yAxis:'=',
                series:'='
            },
            link:function(scope,elem,attr){
                var option={};

                //将所有数据配置到option中
                if(scope.backgroundColor){
                    option.backgroundColor = scope.backgroundColor;
                }
                if(scope.title){
                    option.title=scope.title;
                }
                if(scope.tooltip){
                    option.tooltip = scope.tooltip;
                }
                if(scope.grid){
                    option.grid = scope.grid;
                }
                if(scope.xis){
                    option.xAxis = scope.xis;
                }
                if(scope.yAxis){
                    option.yAxis = scope.yAxis;
                }
                if(scope.series){
                    option.series = scope.series;
                }
                //使用echart生成图表
                var myechart = echarts.init(elem[0]);
                myechart.setOption(option);
            }
        }
    });
