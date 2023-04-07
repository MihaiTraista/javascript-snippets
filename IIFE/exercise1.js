/*
Write a function called counter that returns an object with two methods:
increment() that increments a private counter variable by 1 and returns the updated value.
decrement() that decrements the private counter variable by 1 and returns the updated value.
*/

let makeCounter = () => (() => {
  let counter = 0;

  return {
    increment(){
      counter += 1;
      return counter;
    },

    decrement(){
      counter -= 1;
      return counter;
    }   
  }
})()

const myCounter = makeCounter();

console.log(myCounter.increment());   //  1
console.log(myCounter.increment());   //  2
console.log(myCounter.increment());   //  3
console.log(myCounter.counter);       //  should be undefined
console.log(myCounter.decrement())    //  2