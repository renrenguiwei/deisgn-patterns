// 建造者模式 - 将 类的方法、实例实现 分开实现

class Navbar {
    init() {
        console.log('navbar-init')
    }
    getData() {
        console.log('navbar-getData')
    }
    render() {
        console.log('navbar-render')
    }
}
class List {
    init() {
        console.log('list-init')
    }
    getData() {
        console.log('list-getData')
    }
    render() {
        console.log('list-render')
    }
}

class Operator {
    startBuild(builder) {
        builder.init()
        builder.getData()
        builder.render()
    }
}

const op = new Operator()
const navbar = new Navbar()
const list = new List()

op.startBuild(navbar)
op.startBuild(list)