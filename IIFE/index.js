document.body.style.backgroundColor = "#000";
document.body.style.color = "#FFF";

var funInFun = function(){
	var inner = function(n){
		return n + 100;
	};
	return inner;
}();

console.log(funInFun(6));

