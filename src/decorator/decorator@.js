class Boy {
    @run
    speak () {
        console.log('唱歌')
    }
}

/**
 * @param target Boy对象
 * @param key    被装饰的方法名
 * @param descriptor    描述装饰的方法
 */
function run (target, key, descriptor) {
    console.log(target, key, descriptor)
    // {}
    // speak
    // {
    //   value: [Function: speak],
    //   writable: true,
    //   enumerable: false,
    //   configurable: true
    // }
    console.log('跑步')
}

const boy = new Boy()
boy.speak()