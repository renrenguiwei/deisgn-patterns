const Singleton = (function () {
    let instance = null

    function User(name, age) {
        this.name = name
        this.age = age
    }

    return function (name, age) {
        if (!instance) {
            instance = new User(name, age) // 闭包持有instance后，无法被释放，类似于static
        }
        return instance
    }
})()

console.log(Singleton('xxx', 100) === Singleton('wang', 200))