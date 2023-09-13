// 圆
class Circle {
    draw() {
        console.log('画一个圆')
    }
}

// 给圆画边框
class Decorator {
    constructor(circle) {
        this.circle = circle
    }

    draw() {
        this.circle.draw()
        this.setBorder(this.circle)
    }

    setBorder() {
        console.log('画一个边框')
    }
}

const circle = new Circle()
const decorator = new Decorator(circle)
decorator.draw()