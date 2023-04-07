document.body.style.backgroundColor = "#000";
document.body.style.color = "#FFF";
let counter = 0;

//  without memoization, the function calls itself 452 times!

let fibonacci = function (n) {
  counter += 1;
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// with memoization the function calls itself only 28 times

var memoFibonacci = (() => {
	var memo = [0,1];
	var fib = (n) => {
    counter += 1;
		var result = memo[n];
		if(typeof result !== 'number'){
			result = fib(n-1) + fib(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
})();


for (let i = 1; i <= 10; i += 1){
  document.writeln(i + ':' + memoFibonacci(i) + '<br>');
}

document.writeln(`Called ${counter} times`);


