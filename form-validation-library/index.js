// import { validatePassword } from "./validators/validatePassword.js";

// const mockUser = {
//   name: "Mihai",
//   password: "invalid",
//   email: "valid@email.com",
//   phoneNo: "00000000"
// }

// console.log("calling the function ", validatePassword(mockUser));

function makePerson(name){
  return {
    name,
    age: 30,
    talk(){
      console.log(`My name is ${this.name}`);
    } 
  }
}

const me = makePerson("Mihai");

console.log(me);

class Person {
  constructor(name){
    this.name = name;
  }

  sayName(){
    return `name ${this.name}`;
  }
}