//  Javascript problems from testdome.com

function plusMinus(arr){
  let pNegative, pPositive, pZero = 0;
  
  const lenOfPositives = arr.filter(n => n > 0).length;
  const lenOfNegatives = arr.filter(n => n < 0).length;
  const lenOfZeroes = arr.filter(n => n === 0).length;
  console.log((lenOfPositives / arr.length).toFixed(6))
  console.log((lenOfNegatives / arr.length).toFixed(6))
  console.log((lenOfZeroes / arr.length).toFixed(6))
}

plusMinus([1, 2, 3, 0, -1]);