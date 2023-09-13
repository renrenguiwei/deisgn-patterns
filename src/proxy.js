const Girl = function(name) {
    this.name = name
}

const Boy = function (girl) {
    this.girl = girl
    this.sendGift = function(gift) {
        console.log(`hi，${this.girl.name}，给你送的礼物：${gift}`)
    }
}

const ProxyObj = function(girl) {
    this.girl = girl
    this.sendGift = function(gift) {
        (new Boy(this.girl)).sendGift(gift)
    }
}

const girl = new Girl('小鸟依人')
const proxy = new ProxyObj(girl)
proxy.sendGift('尤加利')