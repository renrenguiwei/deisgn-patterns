'use strict';

// 观察者模式
var event = {
    list: [],
    listen: function listen(brand, fn) {
        if (!this.list[brand]) {
            this.list[brand] = [];
        }
        this.list[brand].push(fn);
    },
    publish: function publish() {
        var brand = arguments[0];
        var fns = this.list[brand] || [];
        for (var i = 0; i < fns.length; i++) {
            var fn = fns[i];
            fn.apply(this, arguments);
        }
    }

    // 浅拷贝
};var initEvent = function initEvent(obj) {
    for (var key in event) {
        obj[key] = event[key];
    }
};

var shopObj = {};
initEvent(shopObj);

// 观察者1
shopObj.listen('Apple', function (brand, model) {
    console.log('观察者1', brand, model);
});

// 观察者2
shopObj.listen('Huawei', function (brand, model) {
    console.log('观察者2', brand, model);
});

// 发布者1
shopObj.publish('Apple', 'iphone15');
// 发布者2
shopObj.publish('Huawei', 'mate50');
shopObj.publish('Huawei', 'mate60');
shopObj.publish('Xiaomi', 'mate60');