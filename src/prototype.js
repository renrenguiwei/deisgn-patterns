// 原型模式
function Employee(name ,age) {
    this.name = name
    this.age = age

    /*this.say = function () {
        console.log(this.age, this.name)
    }*/
}

// 放原型里，方法在实例化后，不管有几个实例都存在一个方法
Employee.prototype.say = function () {
    console.log(this.name, this.age)
}

const _instance = new Employee('claus', 31)
_instance.say()

// 类模式：原型模式的语法糖
/*
class Employee {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    say() {
        console.log(this.name, this.age)
    }
}

const employee = new Employee('小小小', 23)
console.log(employee)
employee.say()
*/
