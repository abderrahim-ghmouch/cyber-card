const test = {};

function User() {
  this.name;
  this.age;

  this.setName = function (name) {
    this.name = name;
  };

  this.setAge = function (age) {
    this.age = age;
  };

  this.toString = function () {
    return `this is ${this.name} his age is ${this.age} year old`;
  };
}

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  toString = function () {
    return `this is ${this.name} his age is ${this.age} year old`;
  };
}

const mohammed = new User();
mohammed.setName(`mohammed`);
mohammed.setAge(20);
console.log(mohammed.toString());

const abdrahim = new User(`abdrahim`,19);
console.log(mohammed.toString());
