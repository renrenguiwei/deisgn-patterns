// 观察者模式
const shopObj = {}

shopObj.list = []

// 事件池
shopObj.listen = function (fn) {
    this.list.push(fn)
}

// 触发事件
shopObj.publish = function () {
    for (let i = 0; i < this.list.length; i++ ) {
        const fn = this.list[i]
        fn.apply(this, arguments)
    }
}

// 观察者1
shopObj.listen(function (brand, model) {
    console.log(brand, model)
})

// 观察者2
shopObj.listen(function (brand, model) {
    console.log(brand, model)
})

// 发布者1
shopObj.publish('apple', 'iphone15')
// 发布者2
shopObj.publish('Huawei', 'mate60')