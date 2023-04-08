//  Douglas Crockford describes this in Chapter 5 JavaScript: The Good Parts
//  https://www.telerik.com/blogs/how-module-pattern-works-javascript
//  The module pattern is quite similar to an IIFE, but a module always returns an object instead of a function.
//  

const mammal = function (spec) {
  let score = 0;

  let that = {
    getName(){
      return spec.name;
    },
    say(){
      return spec.saying || 'no saying';
    },
    incrementScore(){
      score += 1;
    },
    checkHasWon(){
      return score >= 3
    }
  }

  return that;
}

const myMammal = mammal({ name: 'Herb' })

console.log(myMammal.name);             //  undefined super private!
console.log(myMammal.getName());        //  Herb
console.log(myMammal.say());            //  no saying
console.log(myMammal.score);            //  undefined
myMammal.incrementScore();              //  1
myMammal.incrementScore();              //  2
console.log(myMammal.checkHasWon());    //  false
myMammal.incrementScore();              //  3
console.log(myMammal.checkHasWon());    //  true
