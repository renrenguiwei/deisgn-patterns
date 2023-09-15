'use strict';

// 责任链模式
function order500(orderType, isPay, count) {
    if (orderType === 1 && isPay) {
        console.log('获得100元');
    } else {
        return 'goNext';
    }
}
function order400(orderType, isPay, count) {
    if (orderType === 2 && isPay) {
        console.log('获得40元');
    } else {
        return 'goNext';
    }
}
function order200(orderType, isPay, count) {
    if (orderType === 3 && isPay) {
        console.log('获得20元');
    } else {
        return 'goNext';
    }
}
function orderNormal(orderType, isPay, count) {
    if (count > 0) {
        console.log('奖励10元');
    } else {
        console.log('谢谢惠顾');
    }
}

function Chain(fn) {
    this.fn = fn;
    this.nextStep = null;
}
Chain.prototype.setNextStep = function (step) {
    this.nextStep = step;
};

Chain.prototype.passRequest = function () {
    var ret = this.fn.apply(this, arguments);
    if (ret === 'goNext') {
        // 利用apply让下一步方法绑定下一步实例
        this.nextStep && this.nextStep.passRequest.apply(this.nextStep, arguments);
    }
};
// 实例化方法
var chainOrder500 = new Chain(order500);
var chainOrder400 = new Chain(order400);
var chainOrder200 = new Chain(order200);
var chainOrderNormal = new Chain(orderNormal);

// 赋值下一步
chainOrder500.setNextStep(chainOrder400);
chainOrder400.setNextStep(chainOrder200);
chainOrder200.setNextStep(chainOrderNormal);

chainOrder500.passRequest(2, true, 0);