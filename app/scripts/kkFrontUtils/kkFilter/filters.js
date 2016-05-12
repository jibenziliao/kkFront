/**
* 通用过滤器
* @author keyy 2015-12-1 17:56:09
*
*/

'use strict';
/**
 * wf insert
 *    金额转换，四舍五不入---向下取整
 *示例：{{ value | floorTenthousand }}
 */
kkFrontUtils.filter('floorTenthousand', function() {
    return function(datas) {
        var data = datas + "";
        var re = /^[0-9]*[1-9][0-9]*$/;
        if (data < 10000) {
            return data;
        } else {
            data = data / 10000;
            if (re.test(data)) {
                return data + '万';
            } else {
                var dataStr = data.toString();
                return dataStr.slice(0, dataStr.indexOf(".") + 3) + '万';
            }
        }
    }
});

/**
 * nieS insert
 *    隐藏手机号
 *示例：{{ value | hidePhone }}
 */
kkFrontUtils.filter('hidePhone', function() {
    return function(datas) {
        var str1 = (datas + "").substring(0, 3);
        var str2 = (datas + "").substring(9, 11);
        return str1 + '******' + str2;
    }
});

/**
 * nieS insert
 *    隐藏银行卡
 *示例：{{ value | hideBankcard }}
 */
kkFrontUtils.filter('hideBankcard', function() {
    return function(datas) {
        var length = (datas + "").length - 4;
        var str1 = (datas + "").substring(0, 4);
        var str2 = datas.substring(length, (datas + "").length);
        return str1 + ' **** **** ' + str2;
    }
});
