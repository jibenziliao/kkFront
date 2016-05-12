/**
 * 自定义缓存服务
 * @author keyy 2015-12-1 18:06:45
 * @desc项目需要缓存数据时，可以使用此服务
 */
'use strict';
kkFrontUtils.factory('kkStorageService', ['$window', function($window) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        },
        ifObject: function(key) {
            if ($window.localStorage[key]) {
                return true;
            } else {
                return false;
            }
        },
        remove: function(key) {
            $window.localStorage.removeItem(key);
        },
        removeAll: function() {
            $window.localStorage.clear();
        }
    };
}])
