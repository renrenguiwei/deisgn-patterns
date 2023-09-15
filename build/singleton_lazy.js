"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LazySingletonTest = function () {
    function LazySingletonTest() {
        _classCallCheck(this, LazySingletonTest);
    }

    _createClass(LazySingletonTest, [{
        key: "main",
        value: function main() {
            var LazySignleton1 = LazySingnleton.getInstance();
            var LazySignleton2 = LazySingnleton.getInstance();
            console.log(LazySignleton1 === LazySignleton2);
        }
    }]);

    return LazySingletonTest;
}();

var LazySingnleton = function () {
    function LazySingnleton() {
        _classCallCheck(this, LazySingnleton);
    }

    _createClass(LazySingnleton, null, [{
        key: "getInstance",
        value: function getInstance() {
            if (this._instance === null) {
                this._instance = new LazySingnleton();
            }
            return this._instance;
        }
    }]);

    return LazySingnleton;
}();

var test = new LazySingletonTest();
test.main();
