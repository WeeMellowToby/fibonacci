var numberDisplay = document.getElementById("numbers");

var number1 = 1;
var number2 = 1;
var fibonnaciString = ""


  function numberSubmitted() {
    let amount = document.getElementById("fname").value;
    for (let i = 0; i < amount; i++) {
        let tempnumber = number2;
        number2 = tempnumber + number1
        number1 = tempnumber;
        fibonnaciString += number2 + " "
      }
      numberDisplay.innerHTML = fibonnaciString;
  }