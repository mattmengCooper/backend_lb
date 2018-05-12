const a = function () {
    let b = 2;
    return function () {
        console.log('b:', b++);
    }
}
let fun = a();
fun();
fun();
fun();
fun();