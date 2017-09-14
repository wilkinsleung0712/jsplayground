function A() {
  this.a = 1;
  this.b = 2;
}
let a = new A();
let a1 = Object.create(a);
console.log(a1.a);

// if you passed a function on object create it actully create a new variable
// base on a function prototype
let a2 = Object.create(A);
console.log(a2);

// module pattern
// https://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example/19801321#19801321
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/

var counter = (function(){

  var privateCounter = 0;
  function changeBy(value){
    privateCounter+=value;
  }

  return {
    increment:function(){
      changeBy(1);
    },
    decrement:function(){
      changeBy(-1);
    },
    value:function(){
      return privateCounter;
    }
  }
})();

console.log(counter.value());
