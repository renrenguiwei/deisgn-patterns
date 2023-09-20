// 工厂方法 - es6

class User {
    constructor(role, pages) {
        this.role = role
        this.pages = pages
    }

    static UserFactory(role) {

        switch (role) {
            case 'superAdmin':
                return new User('admin', ['main', 'detail'])
            case 'admin':
                return new User('admin', ['main', 'detail'])
            case 'editor':
                return new User('admin', ['main', 'detail'])
        }
    }
}



const user = User.UserFactory('admin')
console.log(user)