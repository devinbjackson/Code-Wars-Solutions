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

// 