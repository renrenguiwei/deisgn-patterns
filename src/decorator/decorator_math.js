// 添加 打印日志
class Math {

    @log(100)
    add(a, b) {
        return a + b
    }
}

function log(num) {
    return function log(target, name, descriptor) {
        const oldValue = descriptor.value
        const _num = num || 0
        descriptor.value = function(...arg) {
            arg[0] += _num
            arg[1] += _num
            console.log(`调用${name}方法`, arg)
            return oldValue.apply(target, arg)
        }
        return descriptor
    }
}

const math = new Math()
console.log(math.add(1, 2))