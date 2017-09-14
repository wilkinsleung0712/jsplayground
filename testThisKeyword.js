function makePerson(first, last) {
  return {
    first: first,
    last: last
  }
}

function personFullName(person) {
  return person.first + ' ' + person.last;
}

function personFullNameReversed(person) {
  return person.last + ', ' + person.first;
}
console.log('#############P###########');
let p = makePerson('wilkins', 'liang');
console.log(personFullName(p));
console.log(personFullNameReversed(p));


// using this
function makePerson1(first, last) {
  return {
    first: first,
    last: last,
    personFullName: function () {
      return this.first + ' ' + this.last;
    },
    personFullNameReversed: function () {
      return this.last + ', ' + this.first;
    },
    test: () => {
      console.log(this);
    }
  }
}
console.log('#############P1###########');
let p1 = makePerson1('wilkins', 'liang');
// the this keyword. Used inside a function
// if we call this from an object via dot notation or bracket notation, that object become this,
// otherwise, this become global
console.log(p1.personFullName); //undefined undefined
console.log(p1.personFullNameReversed()); //liang, wilkins
// p1.test();

function makePerson2(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = () => {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = () => {
    return this.last + ', ' + this.first;
  };
}

// the new keyword do below two thing:
// 1. create a brand new object, with this set to that object
// 2. return the this object to the calling site
console.log('#############P2###########');
let p2 = new makePerson2('wilkins', 'liang');
// console.log(p2.fullName);
console.log(p2.fullName());
console.log(p2.fullNameReversed());
var fullName = p2.fullName;
console.log(fullName());



//
function personFullName() {
  return this.first + ' ' + this.last;
}

function personFullNameReversed() {
  return this.last + ', ' + this.first;
}

function makePerson3(first, last) {
  this.first = first;
  this.last = last;
  // we calling personFullName as a reference so we dont use personFullName() which is actually calling
  // the function
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}
console.log('#############P3###########');
let p3 = new makePerson3('wilkins', 'liang');
console.log(p3.fullName());
console.log(p3.fullNameReversed());


// we use prototype which is an object shared by all instances of makePerson
// It forms part of a lookup chain (that has a special name, "prototype chain"):
//  any time you attempt to access a property of Person that isn't set,
//   JavaScript will check Person.prototype to see if that property exists there instead.
//   As a result, anything assigned to Person.prototype becomes available to all instances of
//    that constructor via the this object.

function makePerson4(first, last) {
  this.first = first;
  this.last = last;
}

makePerson4.prototype.fullName = function () {
  return this.first + ' ' + this.last;
}
makePerson4.prototype.fullNameReversed = function () {
  return this.last + ', ' + this.first;
}
console.log('#############P4###########');
let p4 = new makePerson4('wilkins', 'liang');
console.log(p4.fullName());
console.log(p4.fullNameReversed());
