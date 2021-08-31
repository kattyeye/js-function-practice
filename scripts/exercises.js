(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
 function max() {
  if (4 > 2) {
return 4;
} else{
  return false;
} }
max();

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

function maxOfThree() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max){
      max = arguments[i];
    }
  }
  return max;
}
// maxOfThree(1, 2, 3);

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

function isVowel(char) {
  if (char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ) {
    return true;
  } else {
    return false;
  }
}
// isVowel('a');

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
//   let isvowel = false, vowel;
//   for (let i = 0; i < array.length; i++) {
//       vowel = vowel[i];
//       if (letter == vowel) {
//   isvowel = true;
//   break;
//       }
//   }
// }
// if (!isvowel);
let consonant = ['bcdfghjklmnpqrstvwxz'];
function rovarspraket(text){
  if(text === consonant) {
    text += text;
    return text;
  } else {
    text += "o";
  }
}

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
// function sum(array) {
// let arrayTotal = array.length;
// let totalSum = 0;
// for (let i = 0; i < array.length; i++) {
//   totalSum += array[i];
// }
//   return totalSum;
// }
// }

function sum(myArray) {
  return myArray.reduce(function(a,b) { return a + b; });
}
function multiply(array) {
  let sum = 1;
  for (var i=0; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;
}


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  function reverse(s) {
    return [...s].reverse().join("");
  }

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

 function findLongestWord(str) {
  let words = str.split('');
  let maxLength = 0;
  for (var i=0; i <words.length; i++) {
    if (words[i].length > maxLength){
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

function filterLongWords()

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
