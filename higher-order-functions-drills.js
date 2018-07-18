'use strict';

//Functions as Arguments (1)
function repeat (fn, n) {
  let i = 0;
  while (i < n) {
    fn();
    i++;
  }
}

function hello () {
  console.log('Hello world');
}

function goodbye () {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);



//Functions as Arguments (2)
// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

/*const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']*/
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  const newArray = []; 
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  } return newArray;
} 
console.log(filter(myNames, name => name[0] === 'R')); 



//Functions as Return Values
function hazardWarningCreator (typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered 1 time!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const sharpTurn = hazardWarningCreator('Sharp turn ahead');
const accidentAhead = hazardWarningCreator('Caution, wreck ahead');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
sharpTurn('Main St and Pacific Ave');
sharpTurn('Centinela Ave and Olympic Blvd');

accidentAhead('Main St and Pacific Ave');
accidentAhead('Centinela Ave and Olympic Blvd');



//forEach, filter, and map
const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]; 
const noNegs = turtleMoves.filter(innerArray => innerArray[0] >= 0 && innerArray[1] >= 0);
const addSteps = noNegs.map(innerArray => innerArray[0] + innerArray[1]); 
addSteps.forEach(function(num) {
  console.log(num);
});



//Reduce
const sentence =  'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function decodedSentence (decodeSentence) {
  const sentArr = decodeSentence.split(' ');
  let mapArr = [];
  sentArr.forEach(function(word) {
    if (word.length === 3) {
      mapArr.push(' ');
    } else {
      mapArr.push(word[word.length - 1].toUpperCase());
    }
  });
  const reducer = function (accumulator, currentValue) {
    return accumulator.concat(currentValue);
  };
  let decodedWord = mapArr.reduce(reducer);
  return decodedWord;
}

console.log(decodedSentence(sentence));

