'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 圆
var Circle = function () {
    function Circle() {
        _classCallCheck(this, Circle);
    }

    _createClass(Circle, [{
        key: 'draw',
        value: function draw() {
            console.log('画一个圆');
        }
    }]);

    return Circle;
}();

// 给圆画边框


var Decorator = function () {
    function Decorator(circle) {
        _classCallCheck(this, Decorator);

        this.circle = circle;
    }

    _createClass(Decorator, [{
        key: 'draw',
        value: function draw() {
            this.circle.draw();
            this.setBorder(this.circle);
        }
    }, {
        key: 'setBorder',
        value: function setBorder() {
            console.log('画一个边框');
        }
    }]);

    return Decorator;
}();

var circle = new Circle();
var decorator = new Decorator(circle);
decorator.draw();