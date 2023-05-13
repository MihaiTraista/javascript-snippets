//  using the void keyword
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void

void function () {
  console.log("Executed!");
}();


// This is a bit longer than wrapping the function expression in parentheses, which has the same effect of forcing the function keyword to be parsed as the start of an expression instead of a statement.

(function () {
  console.log("Executed!");
})();

