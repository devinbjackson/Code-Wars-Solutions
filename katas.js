// Subtract the Sum

function SubtractSum(n) {
    var array = [];
    for (var ind = 0; ind < 100; ind++) {
      array.push(ind + 1);
    }
    var digits = ('' + n).split('');
  
    while (!array.includes(parseInt(digits.join(''), 10) - sum)) {
      var sum = 0;
      for (var i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i], 10);
      }
      digits = ('' + (parseInt(digits.join(''), 10) - sum)).split('');
    }
    return 'apple'
  }

// or just return apple. that works too.

// Printer Errors

function printerError(s) {
    var num = 0;
    for(var i = 0; i < s.length; i++){
    /[n-z]/g.exec(s[i])? num++:null;
    }
    return `${num}/${s.length}`
}

// Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  var arr = [humanYears, 0, 0];
  if (humanYears == 1) {
    return [1, 15, 15];
  } else if (humanYears == 2) {
    return [2, 24, 24];
  }
  arr = [humanYears, 24, 24];
  for (var i = 2; i < humanYears; i++) {
    arr[1] += 4;
    arr[2] += 5;
  }
  return arr;
};

// Kata Example Twist

var websites = []

for(var i = 0; i < 1000; i++){
   websites.push("codewars")
}

// Elevator Distance

function elevatorDistance(array) {
  var sum;
   for(var i = 0; i < array.length; i++){
    i === 0 ? sum = 0 : sum += Math.abs((array[i] - array[i-1])) 
   }
   return sum
 }

 // Who is going to pay for the wall?

 function whoIsPaying(name){
  if(name.length < 3){
    return (name, [name])
  }
  return [name, (name[0] + name[1])]
}

// Minimize _sum_Of_array_(Array_Series_#1)

function minSum(arr) {
  var sortedArray = arr.sort(function(a,b){
    return a-b
  })
  var sumArr = [];
  for(var i = 0; i < sortedArray.length/2; i++){
    console.log(sortedArray[(sortedArray.length - 1) - i])
    sumArr.push(sortedArray[i] * sortedArray[(sortedArray.length -1) - i]) 
  }
  return sumArr.reduce(function(a,b){
    return a+b
  })
}

// Multiply

function multiply(a, b){
  return a * b
}

// Single character palindromes II

function solve(str) {
  var count = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      if (!count.includes(str.length - 1 - i)) {
        count.push(i);
      }
    }
  }
  if (count.length === 1) {
    return true;
  } else {
        if(str.length%2 !== 0){
      return true
    }
    return false;
  }
}

// Positive sum

function positiveSum(arr) {
  var sum=0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i]>=0){
      sum += arr[i]
    }
  }
  return sum
}
