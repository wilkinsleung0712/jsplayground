var testArray = ['dog','cat','hen'];
testArray.forEach((currentValue,index,array)=>{
  console.log(currentValue + ' vs. '+array[index]);
});

console.log(testArray.toString());
let a = testArray.concat(['pig',['duck']]);
console.log(a);


console.log(testArray.slice(0,2) + ' vs '+testArray);
// console.log(testArray);

function add(){
  let sum = 0;
  for(let i = 0; i< arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

function avg(){
  let sum = 0;
  for(let i = 0; i< arguments.length; i++){
    sum += arguments[i];
  }
  return sum / arguments.length;
}

console.log(add(2,3,4,5,6,7,8));
console.log(avg(1,2,3));


function yied(a){
  return function(b){
    return a+b;
  }
}

console.log(yied(1)(2));


function avgArray(array){
  let sum = 0;
  for(let i = 0; i< array.length; i++){
    sum += array[i];
  }
  return sum / array.length;
}

console.log(avgArray([2,3,4,5]));
console.log(avg.apply(null,[2,3,4,5]));


var agr1 = function(){
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}
let p = new Object('ok');
