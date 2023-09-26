// 饿汉模式：调用类时实例化
class HungrySingletonTest {
    main() { // javascript标准语法 默认是public，是不需要额外加
        new HungrySingleton()
        const HungrySingleton1 = HungrySingleton.getInstance();
        const HungrySingleton2 = HungrySingleton.getInstance();
        console.log(HungrySingleton1 === HungrySingleton2);
    }
}

class HungrySingleton {
    static _instance  = new HungrySingleton() // static在全局中保有一份，类似于闭包

    constructor() {
        // 防止类被再次实例化
        if (HungrySingleton._instance) {
            throw new Error("Singleton instance already exists. Use getInstance() method.");
        }
    }

    static getInstance() {
        return this._instance
    }
}

new HungrySingletonTest().main();