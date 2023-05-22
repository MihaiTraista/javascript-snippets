//  Javascript problems from testdome.com

async function firstSuccessfulPromise(promiseArray) {
  let result = undefined;

  for (let i = 0; i < promiseArray.length; i++){

    try {
      result = await promiseArray[i];
      return new Promise((resolve, reject) => resolve(result));
    } catch (err){
      console.log("the error is", err)
    }
  }
  return result;
}

let promise = firstSuccessfulPromise([
  new Promise((resolve, reject) => reject("bad")), 
  new Promise((resolve, reject) => resolve("Success!"))]);
promise.then(result => console.log(result));

