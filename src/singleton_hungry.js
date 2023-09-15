// 饿汉模式：调用类时实例化
class HungrySingletonTest {
    main() { // javascript标准语法 默认是public，是不需要额外加
        const HungrySingleton1 = HungrySingleton.getInstance();
        const HungrySingleton2 = HungrySingleton.getInstance();
        console.log(HungrySingleton1 === HungrySingleton2);
    }
}

class HungrySingleton {
    static _instance  = new HungrySingleton()

    static getInstance() {
        return this._instance
    }
}

new HungrySingletonTest().main();