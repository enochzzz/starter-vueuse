function func2() {
    console.log('i am pkg 2');
}

// const a = new LKMap.Icon()
function fun1() {
    func2();
    console.log('i am pkg 1');
}
fun1();

export { fun1 };
