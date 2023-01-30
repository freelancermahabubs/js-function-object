// function functionName(parameters){
//   // function body
//   // return
// }
// // call function name 
// var returnedValue = functionName(parameter, value)

// function getAverage (assignment1, assignment2, assignment3){
//   const total =assignment1 + assignment1 + assignment3;
//   const average = total / 3;
//   return average;
// }
// const assignment1Marks = 60;
// const assignment2Marks = 58;
// const assignment3Marks = 59;

// var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
// console.log('My Average so Far', myAverage);

/**
 ----------------
 AVERAGE MATH FUNCTION
 -------------------
 */
function getAverage(bangla, math, english, arabic, history){
  const total = bangla + math + english + arabic + history;
  const average = total / 5;
  return average;
}

const banglaScore = 50;
const mathScore = 60;
const englishScore = 80;
const arabicScore = 75;
const historyScore = 55;
var myAverage = getAverage(banglaScore, mathScore, englishScore, arabicScore, historyScore)
console.log(myAverage);

