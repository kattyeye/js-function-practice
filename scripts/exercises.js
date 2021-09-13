(function () {
  "use strict";

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // function is called max,
  //  parameters are num1 and num2
  // returning a number
  //

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }

  // maxOfThree(1, 2, 3);

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  // function called isVowel
  // param = char
  // returns true or false
  function isVowel(char) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      return true;
    } else {
      return false;
    }
  }

  // 'aeiou'.includes(char);

  // var char = 'b';
  // isVowel(char);
  // isVowel('a');

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  // function name is rovarspraket
  // param is any text put in
  // returns an array JOINED back TOGETHER to make a string

  function rovarspraket(text) {
    text = text.toLowerCase().split(""); //Fun => ['f', 'u', 'n']
    for (let i = 0; i < text.length; i++) {
      if ("bcdfghjklmnpqrstvwxz".includes(text[i])) {
        text[i] = text[i] + "o" + text[i]; //'f' => 'fof'; ['fof', u , 'non']
      }
    }
    return text.join(""); //'fofunon'; JOINS all text from the array
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

  // function sum(myArray) {
  //   return myArray.reduce(function(a,b) { return a + b; });
  // }

  function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total = total + arr[i];
    }
    return total;
  }

  function multiply(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
      product = product * array[i];
    }
    return product;
  }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  // function reverse(string)

  function reverse(str) {
    let output = "";
    for (let i = str.length; i > 0; i--) {
      output = output + str[i - 1];
    }
    return output;
  }

  // other way to do it ===>  str.split('')).reverse().join('');

  //  function reverse (string) {
  //   var length = string.length;
  //   var reversed = [];
  //   var joined = ('');
  //   for (i=length; i>0; i--) {
  // reversed.push(string.charAt(i-1))  ;
  //   };
  //   for (i = 0; i < (length); i++){
  //     joined += (reversed[i]);
  //   }
  //   return joined;
  // }
  // var reverse = reverse('dogs');

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
  //function name is findLongestWord

  //param is str

  function findLongestWord(arg) {
    let result = 0;
    for (let i = 0; i < arg.length; i++) {
      let contender = arg[i].length;
      if (contender >= result) {
        result = contender;
      }
    }
    return result;
  }

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  //params are array and i
  //returns the words longer than i

  function filterLongWords(el, j) {
    let longest = [];
    for (let i = 0; i < el.length; i++) {
      if (el[i].length > j) {
        longest.push(el[i]); //push adds to end of array
      }
    }
    return longest;
  }

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  // function name charFreq
  // param is string(any string)
  // checking to see if the string has characters and adds one to frequency in list
  function charFreq(string) {
    const list = {};
    let length = string.length;
    for (let i = 0; i < length; i++) {
      if (string.charAt(i) in list) list[string.charAt(i)] += +1;
      else {
        list[string.charAt(i)] = 1;
      }
    }
    return list;
  }
  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, "function max error");

  console.assert(maxOfThree(1, 2, 3) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(2, 3, 1) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(3, 2, 1) === 3, "ERROR maxOfThree");

  console.assert(isVowel("a") === true, "ERROR function isVowel");

  console.assert(isVowel("b") == false, "ERROR function isVowel");

  console.assert(
    rovarspraket("this is fun") === "tothohisos isos fofunon",
    "ERROR function rovarspraket"
  );

  console.assert(sum([1, 2, 3, 4]) === 10, "ERROR function sum");

  console.assert(multiply([1, 2, 3, 4]) === 24, "ERROR function multiply");

  console.assert(
    reverse("jag testar") === "ratset gaj",
    "ERROR function reverse"
  );

  console.assert(
    findLongestWord([
      "hello",
      "world",
      "does",
      "anyone",
      "really",
      "know",
      "what",
      "time",
      "it",
      "is",
    ]) === 6,
    "ERROR function findLongestWord"
  );

  console.assert(
    filterLongWords(
      [
        "hello",
        "world",
        "does",
        "anyone",
        "really",
        "know",
        "what",
        "time",
        "it",
        "is",
      ],
      4
    ).length === 4,
    "ERROR function filterLongWords"
  );

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").a === 7);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").b === 14);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").c === 3);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").d === 3);
})();
