// 观察者模式
const shopObj = {}

shopObj.list = []

// 事件池
shopObj.listen = function (brand,fn) {
    if (!this.list[brand]) {
        this.list[brand] = []
    }
    this.list[brand].push(fn)
}

// 触发事件
shopObj.publish = function (brand) {
    const fns = this.list[brand] || []
    for (let i = 0; i < fns.length; i++ ) {
        const fn = fns[i]
        fn.apply(this, arguments)
    }
}

// 观察者1
shopObj.listen('Apple', function (brand, model) {
    console.log('观察者1', brand, model)
})

// 观察者2
shopObj.listen('Huawei', function (brand, model) {
    console.log('观察者2', brand, model)
})

// 发布者1
shopObj.publish('Apple', 'iphone15')
// 发布者2
shopObj.publish('Huawei', 'mate50')
shopObj.publish('Huawei', 'mate60')