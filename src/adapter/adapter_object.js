// 适配器模式：对象适配器 - 对象传递
class Adaptee {
    public output220v() {
        return 220;
    }
}

interface Target {
    output5v: () => void
}

class Adapter implements Target {
    private adaptee: Adaptee

    constructor(adaptee: Adaptee ) {
        this.adaptee = adaptee
    }

    output5v() {
        const v = this.adaptee.output220v()
        //…
        console.log(v + '伏输出了5v')
        return 5
    }
}

class AdapteeTest {
    static main () {
        const adaptee = new Adaptee()
        const target = new Adapter(adaptee)
        target.output5v()
    }
}

AdapteeTest.main()