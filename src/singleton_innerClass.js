class InnerClassSingletonTest {
    static main() { // javascript标准语法 默认是public，是不需要额外加
        // new HungrySingleton()
        const InnerClassSingleton1 = InnerClassSingleton.getInstance();
        const InnerClassSingleton2 = InnerClassSingleton.getInstance();
        console.log(InnerClassSingleton1 === InnerClassSingleton2);
    }
}

class InnerClassSingleton {
    constructor() {
        // 防止类被再次实例化
        if (InnerClassSingleton._instance) {
            throw new Error("Singleton instance already exists. Use getInstance() method.");
        }
    }

    static getInstance() {
        return InnerClassHolder._instance
    }
}

// 静态内部类模式：获取类实例时实例化，类似于 懒汉模式
class InnerClassHolder{
    static _instance = new InnerClassSingleton()
}

InnerClassSingletonTest.main();