class Boy {
    @run
    speak () {
        console.log('唱歌')
    }
}

function run (target, key, descriptor) {
    console.log(target, key, descriptor)
    console.log('跑步')
}

const boy = new Boy()
boy.speak()