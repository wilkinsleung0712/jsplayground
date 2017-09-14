var a = 1;
var b = 2;
function test() {
    var a = 3;
    console.log(a);
    // console.log(this.a);
    console.log(b);
    // console.log(this.b);
}


var test1 = test(2);
var test2 = new test(2);
// test1.a = 4;
console.log(test1);
console.log(test2);