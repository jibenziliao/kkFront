/**
 * kkFrontDemo公用时间服务
 * @authorkeyy 2015-12-1 17:24:41
 * @desc 支持字符串转时间，时间加减（年月日），计算两个日期之间相差多少天，获取某月最后一天
 * 
 */
'use strict';
kkFrontUtils.service('kkTimeService',[function(){
    return {
        //字符串转时间，暂时仅支持纯数字类字符串，如20150203090700
        stringToDateTime:function(data){
            var _year, _month, _day, _hour, _min, _second, _dateString;
            _year = data.length >= 4 ? (data + '').substring(0, 4) : "2015";
            _month = data.length >= 6 ? (data + '').substring(4, 6) : "01";
            _day = data.length >= 8 ? (data + '').substring(6, 8) : "01";
            _hour = data.length >= 10 ? (data + '').substring(8, 10) : "00";
            _min = data.length >= 12 ? (data + '').substring(10, 12) : "00";
            _second = data.length >= 14 ? (data + '').substring(12, 14) : "00";
            _dateString = _year + "/" + _month + "/" + _day + " " + _hour + ":" + _min + ":" + _second;
            return new Date(_dateString);
        },
        //时间加减(type:year,month,date),参数示例:(date,-1,year)
        dateMath:function(date,value,type){
            var fn = {
                year : "FullYear",
                month : "Month",
                date : "Date"
            };
            date["set"+fn[type]](date["get"+fn[type]]()+value);
            return date;
        },
        //获取某月最后一天
        getLastDate:function(date){
            date.setMonth(date.getMonth()+1);
            date.setData(0);
            return date.getDate();
        },
        //两个日期之间相差多少天
        getRange:function(bgdate,smdate){
             return Math.abs((bgdate.getTime()-smdate.getTime())/1000/60/60/24);
        },
        //剩余时间（*天*小时*分钟*秒）
        getResidueDays:function(data){
            var residueDays={
                days:parseInt(data / 1000 / 60 / 60 / 24, 10),
                hours:parseInt(data / 1000 / 60 / 60 % 24, 10) + parseInt(data / 1000 / 60 / 60 / 24, 10) * 24,
                mins: parseInt(data / 1000 / 60 % 60, 10),
                seconds:parseInt(data / 1000 % 60, 10)
            };
            return residueDays;
        }
    }
}]);