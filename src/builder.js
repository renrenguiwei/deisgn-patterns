// 建造者模式 - 将 类的方法、实例实现 分开实现
class Navbar {
    async init() {
        console.log('navbar-init')
    }
    async getData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('navbar-getData')
            }, 1000)
        })
        // console.log('navbar-getData')
    }
    async render() {
        console.log('navbar-render')
    }
}
class List {
    async init() {
        console.log('list-init')
    }
    async getData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('list-getData')
            }, 1000)
        })
        // console.log('list-getData')
    }
    async render() {
        console.log('list-render')
    }
}

class Operator {
    async startBuild(builder) {
        await builder.init()
        const data = await builder.getData()
        console.log(data)
        await builder.render()
    }
}

const op = new Operator()
const navbar = new Navbar()
const list = new List()

op.startBuild(navbar)
op.startBuild(list)