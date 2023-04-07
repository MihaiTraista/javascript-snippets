/*
Write a function called factorial that takes a number as an argument and returns the factorial of that number. The factorial of a number is the product of all positive integers from 1 up to and including that number. For example, the factorial of 5 is 5 x 4 x 3 x 2 x 1 = 120.

The factorial function should use memoization to avoid redundant calculations. It should keep track of previously calculated factorials in an object called cache. If a factorial has already been calculated for a given number, the function should return the cached value instead of calculating it again.
*/

const factorial = (() => {
	const cache = [1, 1];
	const fac = (n) => {
		let result = cache[n];
    if (typeof result === 'number'){
      console.log(`Used the cache for ${n}!`);
    } else {
			result = n * fac(n-1);
			cache[n] = result;
		}
		return result;
	};
	return fac;
})();


console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
console.log(factorial(5)); // 120
