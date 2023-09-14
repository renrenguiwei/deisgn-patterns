// 添加 打印日志

class Math {

    @log
    add(a, b) {
        return a + b
    }
}

function log(target, name, descriptor) {
    const oldValue = descriptor.value
    descriptor.value = function() {
        console.log(`调用${name}方法`, arguments)
        return oldValue.apply(target, arguments)
    }
    return descriptor
}

const math = new Math()
math.add(12, 23)