// 适配器模式：类适配器 - 类继承
class Adaptee {
    public output220v() {
        return 220;
    }
}

interface Target {
    output5v: () => void
}

class Adapter extends Adaptee implements Target {
    output5v() {
        const v = this.output220v()
        //…
        console.log(v + '伏输出了5v')
        return 5
    }
}

class AdapteeTest {
    static main () {
        const target = new Adapter()
        target.output5v()
    }
}

AdapteeTest.main()