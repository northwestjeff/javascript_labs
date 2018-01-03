/* ************************* */
/* your javascript goes here */

// inside the function below is where you will
// do your work
// the transform function takes a string as an input
// and print out the result using the `printResult`
// function
// you can add more functions above to keep your
// code clean and readable

var units = {"quarters": 25, "dimes": 10, "nickels": 5, "pennies": 1}
var changeReturn = {}




//
// function divide(input, units, changeReturn) {
//     var runningTotal = parseInt(input);
//     for (k in units) {
//         var coinValue = parseInt(units[k]);
//         var numOfCoin = Math.floor(runningTotal / coinValue);
//         runningTotal = runningTotal - (coinValue * numOfCoin);
//         changeReturn[k] = numOfCoin
//         return "Result: " + changeReturn["quarters"] + " quarters, " + changeReturn["dimes"] + " dimes, " + changeReturn["nickels"] + " and " + changeReturn["pennies"] + " pennies. "
//         // console.log(runningTotal, coinValue, numOfCoin, changeReturn)
//
//         // console.log(numOfCoin * coinValue)
//     }
// }

function transform(input) {
    if (input) {
        clearError();
        var runningTotal = parseInt(input);
        for (k in units) {
            var coinValue = parseInt(units[k]);
            var numOfCoin = Math.floor(runningTotal / coinValue);
            runningTotal = runningTotal - (coinValue * numOfCoin);
            changeReturn[k] = numOfCoin;
            console.log(changeReturn)
        }
        var result = "Result: " + changeReturn["quarters"] + " quarters, " + changeReturn["dimes"] + " dimes, " + changeReturn["nickels"] + " nickels, and " + changeReturn["pennies"] + " pennies. "
        printResult(result);}

    }

document.addEventListener('DOMContentLoaded', function (evt) {
  // you can rename the `transform` function
  // above, but if you do, you need to change
  // the name here, too
  setup(transform);
  focusInput();
});

/* ************************************** */
/* do not change anything below this line */

function focusInput() {
  document.querySelector('[name="input"]').focus();
}

function printResult(str) {
  document.getElementById('result').innerHTML = str;
}

function printError(str) {
  var err = document.getElementById('error');
  err.classList.add('error');
  err.innerHTML = str;
}

function clearError() {
  var err = document.getElementById('error');
  err.innerHTML = '';
  err.classList.remove('error');
}

function setup(callback) {
  document.querySelector('form')
    .addEventListener('submit', function (evt) {
    evt.preventDefault();
    var value = document.querySelector('input').value;
    callback(value);
  });
}
