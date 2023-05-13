//  https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
//  revisit Q3, 

let animals = ["eagle", "osprey", "salmon"];
let k = animal => animal === "salmon";

if(animals.some(k)){
  console.log("swim");
}
