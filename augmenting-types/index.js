/*
//	example from the book

Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
}

Number.method('integer', function(){
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

*/

//	add a method to the prototype directly
Number.prototype.integer = function () {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
};

console.log('int of -10 / 3', (-10 / 3).integer());

