class LazySingletonTest {
    main() { // javascript标准语法 默认是public，是不需要额外加
        const LazySingleton1 = LazySingleton.getInstance();
        const LazySingleton2 = LazySingleton.getInstance();
        console.log(LazySingleton1 === LazySingleton2);
    }
}

class LazySingleton {
    static _instance  = null

    static getInstance() {
        if (this._instance === null) {
            this._instance = new LazySingleton();
        }
        return this._instance;
    }
}

new LazySingletonTest().main();