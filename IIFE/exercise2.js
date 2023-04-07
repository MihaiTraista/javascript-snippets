/*
Write a function called quiz that takes an array of questions and answers and returns a new object with two methods:

question() that returns a random question from the array.
answer(userAnswer) that takes a user's answer as an argument and returns a message indicating whether the answer is correct or incorrect.
The array of questions and answers should be an argument to the quiz function.

The private variables currentQuestion and score should be initialized to 0 when the quiz function is called. The private variable questions should be initialized to the array of questions and answers.
*/

let quiz = (data) => ((data) => {
  const privateData = [...data];
  let currentQuestion, score = 0;

  return {
    question(){
      currentQuestion = Math.floor(Math.random() * privateData.length);
      console.log('currentQuestion', currentQuestion);
      return privateData[currentQuestion].question;
    },
    answer(userAnswer){
      if (userAnswer === privateData[currentQuestion].answer){
        score += 1;
        return true;
      } else {
        return false;
      }
    },
    getScore(){
      return score;
    }
  }
})(data);

const myQuiz = quiz([
  {
    question: "What is the capital of France?",
    answer: "Paris"
  }, {
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest"
  }, {
    question: "What is the largest country in the world by area?",
    answer: "Russia"
  }
]);

console.log(myQuiz.question()); // What is the capital of France?
console.log(myQuiz.answer("Paris")); // Correct!
console.log("should be undefined", myQuiz.score);
console.log("should return the current score", myQuiz.getScore());
