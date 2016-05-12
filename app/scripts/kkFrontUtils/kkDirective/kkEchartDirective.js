/**
 * ͼ��ָ��
 * @author shu on 2015/10/10.
 * @desc ��ָ�������ò��ֲ��������ֲ��������ڳ�����
 */
kkFrontUtils.directive('comnEchart',function(){
        return {
            restrict: 'A',
            scope: {
                title:'=',//ͼ���������
                backgroundColor:'=',
                tooltip:'=',
                grid:'=',
                xis:'=',
                yAxis:'=',
                series:'='
            },
            link:function(scope,elem,attr){
                var option={};

                //�������������õ�option��
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
                //ʹ��echart����ͼ��
                var myechart = echarts.init(elem[0]);
                myechart.setOption(option);
            }
        }
    });
