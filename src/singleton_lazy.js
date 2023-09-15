class LazySingletonTest {
    main() {
        const LazySignleton1 = LazySingnleton.getInstance()
        const LazySignleton2 = LazySingnleton.getInstance()
        console.log(LazySignleton1 === LazySignleton2)
    }
}

class LazySingnleton {
    static _instance: LazySingnleton

    static getInstance() {
        if (this._instance === null) {
            this._instance = new LazySingnleton()
        }
        return this._instance
    }
}

const test = new LazySingletonTest()
test.main()