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

//
