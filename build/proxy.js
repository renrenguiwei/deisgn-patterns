'use strict';

var Girl = function Girl(name) {
    this.name = name;
};

var Boy = function Boy(girl) {
    this.girl = girl;
    this.sendGift = function (gift) {
        console.log('hi\uFF0C' + this.girl.name + '\uFF0C\u7ED9\u4F60\u9001\u7684\u793C\u7269\uFF1A' + gift);
    };
};

var ProxyObj = function ProxyObj(girl) {
    this.girl = girl;
    this.sendGift = function (gift3333) {
        new Boy(this.girl).sendGift(gift);
    };
};

var girl = new Girl('小鸟依人');
var proxy = new ProxyObj(girl);
proxy.sendGift('尤加利');