"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

// 添加 打印日志

var Math = (_dec = log(100), (_class = function () {
    function Math() {
        _classCallCheck(this, Math);
    }

    _createClass(Math, [{
        key: "add",
        value: function add(a, b) {
            return a + b;
        }
    }]);

    return Math;
}(), (_applyDecoratedDescriptor(_class.prototype, "add", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class));


function log(num) {
    return function log(target, name, descriptor) {
        var oldValue = descriptor.value;
        var _num = num || 0;
        descriptor.value = function () {
            for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                arg[_key] = arguments[_key];
            }

            arg[0] += _num;
            arg[1] += _num;
            console.log("\u8C03\u7528" + name + "\u65B9\u6CD5", arg);
            return oldValue.apply(target, arg);
        };
        return descriptor;
    };
}

var math = new Math();
console.log(math.add(1, 2));