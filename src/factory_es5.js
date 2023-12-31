// 工厂方法 - ES5
function UserFactory(role) {
    // 需被实例化的业务方法
    function User(role, pages) {
        this.role = role
        this.pages = pages
    }

    switch (role) {
        case 'superAdmin':
            return new User('admin', ['main', 'detail'])
        case 'admin':
            return new User('admin', ['main', 'detail'])
        case 'editor':
            return new User('admin', ['main', 'detail'])
        default:
            throw new Error('参数错误')
    }
}

const user = UserFactory('admin')
console.log(user)