// Question 1
function maxOfTwoNumbers(x, y) {
    if (x < y) {
        return y;
    }
    else {
        return x;
    }
}

// Question 2
function maxOfThree(x, y, z) {
    if( x > y && x > z) {
        return x;
    }
    else if( y > x && y > z ) {
        return y;
    }
    else {
        return z;
    }
}

// Question 3
function isCharacterAVowel(c) {
    var vowels = ["a","e", "i", "o", "u"];
     if (vowels.indexOf(c) != -1) {
       return true;
     }
       return false;
}
isCharacterAVowel("c");

// Question 4
var num = [1, 2, 3, 4];
function sumArray(num) {
    var sum = 0;
    for (i = 0; i < num.length; i++ ) {
        sum += num[i];
    }
    return sum;
}
sumArray(num);

// Question 4
var num = [1, 2, 3, 4];
function multiplyArray(num) {
    var sum = 1;
    for (i = 0; i < num.length; i++) {
        sum *= num[i];
    }
    return sum;
}
sumArray(num);

// Question 5
var numberOfArguments = function(args){
    var args = ["This", "Is", "an", "argument"];
    return args.length;
  };
  numberOfArguments();
  
}


// Question 6
var reverseString = function (string){
    return string.split('').reverse().join('');
  };
  reverseString("This is backwards")


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
