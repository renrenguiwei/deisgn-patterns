// 抽象工厂方法 - es6

class User {
    constructor(name, role, pages) {
        this.name = name
        this.role = role
        this.pages = pages
    }

    dataShow () {
        throw new Error('抽象方法不允许实例化')
    }

    welcome() {
        console.log('欢迎来到抽象工厂')
    }
}

class SuperAdmin extends User {
    constructor(name) {
        super(name, 'superAdmin', ['main', 'detail']);
    }

    dataShow() {
        console.log(this.role, '角色功能')
    }
}
class Admin extends User {
    constructor(name) {
        super(name, 'admin', ['main', 'detail']);
    }

    dataShow() {
        console.log(this.role, '角色功能')
    }
}
class Editor extends User {
    constructor(name) {
        super(name, 'editor', ['main', 'detail']);
    }

    dataShow() {
        console.log(this.name, this.role, '角色功能')
    }
}

function getAbstractUserFactory(role) {
    switch (role) {
        case 'superAdmin':
            return SuperAdmin
        case 'admin':
            return Admin
        case 'editor':
            return Editor
    }
}

const UserClass = getAbstractUserFactory('admin')
const user = new UserClass('claus')

console.log(user)