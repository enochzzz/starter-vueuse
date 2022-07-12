'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function func2() {
    console.log('i am pkg 2');
}

// const a = new LKMap.Icon()
function fun1() {
    func2();
    console.log('i am pkg 1');
}
fun1();

exports.fun1 = fun1;
