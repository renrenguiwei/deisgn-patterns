// 枚举模式：javascript没有对应的枚举模式
class EnumSingletonTest {
    static main() { // javascript标准语法 默认是public，是不需要额外加
        const EnumSingleton1 = EnumSingleton.INSTANCE;
        const EnumSingleton2 = EnumSingleton.INSTANCE;
        console.log(EnumSingleton1 === EnumSingleton2);
    }
}

class EnumSingleton {
    INSTANCE
}

EnumSingletonTest.main()