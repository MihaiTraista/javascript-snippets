const myarr = [1, 2, 3];
console.log(Object.prototype.toString.call(myarr));

class Person{
  constructor(name){
    this.name = name
  }

  talk() {
    return 'talking...';
  }
}

const me = new Person("Mihai");
const you = new Person("Klauss");

console.log(me);
console.log(me.talk());

function Alien(id){   //  a constructor function
  this.id = id
  this.talk = function () {
    return "alien sounds";
  }
}

const hugo = new Alien("123");


