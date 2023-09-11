const Girl = function(name) {
    this.name = name
}

const Boy = function (girl) {
    this.girl = girl
    this.sendGift = function(gift) {
        console.log(`${this.girl.name}，给你送的礼物${gift}`)
    }
}

