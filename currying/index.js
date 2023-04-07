//  https://javascript.info/currying-partials
//  https://builtin.com/software-engineering-perspectives/currying-javascript

function sum(a) {
  return (b) => {
      return (c) => {
          return a + b + c
      }
  }
}
console.log(sum(1)(2)(3)) // 6