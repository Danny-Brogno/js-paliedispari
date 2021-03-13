// Una funzione per capire se la parola è palindroma L'utente sceglie pari o dispari e un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer. Sommiamo i due numeri e dichiariamo chi ha vinto.

function function1 (oddOrEven, numberChoice, pcNumber) { // -----------FUNCTION STARTS HERE---------------------

  console.log("User chose " + oddOrEven + " and has chosen " + numberChoice + " for number. " + "The random number generated for the pc is " + pcNumber);

  // THIS IS THE CASE WHERE THE USER MAKES THE CORRECT CHOICE
  if ((oddOrEven == "odd") || (oddOrEven == "even")) { // "||" means OR
    console.log("choice accepted");

    // THIS IS THE CASE WHERE ALL GOES SMOOTHLY----------------------------------------------------------------
    if (numberChoice < 6) {
      console.log(oddOrEven, numberChoice);

      var sum = numberChoice + pcNumber;
      var odd = sum % 2 == 1;
      var even = sum % 2 == 0;
      console.log("If we put together our numbers we have " + " "+ sum);

      if (odd) {
        console.log("odd wins");
      } else {
        console.log("even wins");
      }

      var printing = document.getElementById("title");
      printing.innerHTML = sum;


    // THIS IS THE CASE WHERE USER CHOOSES AN INVALID NUMBER--------------------- --------------------------------
    } else if (numberChoice >= 6) {
      console.log(oddOrEven, numberChoice);
      alert("Insert a number from 1 to 5, please refresh the page to try again.");
    }

  // THIS IS THE CASE WHERE THE USER DOES NOT CHOOSE ONE OF THE TWO OPTIONS "ODD" OR "EVEN"
  } else {
    alert("The choices are 'odd' or 'even', please refresh the page to try again.");
  }

} // --------------------------------------THE FUNCTION ENDS HERE-------------------------------------------------



// FUNCTION THAT GENERATES A RANDOM NUMBER
function numberGeneratorPc (min, max) {
  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var randomNumber = Math.floor(Math.random() * maxRnd) + minRnd;
  return randomNumber;
} // THE FUNCTION ENDS HERE

// var randomNumber = numberGeneratorPc(0, 5);
// console.log(randomNumber);
//
// var lallero = numberGeneratorPc(0, 100);
// console.log(lallero);
// CREATE A FUNCTION THAT GENERATES A RANDOM NUMBER AND USE IT TO PINPOST/ASSIGN A VALUE TO THE VARIABLE "pcRndNumber"


var oddOrEvenUser = prompt("Please choose between: odd or even");
var numberUserChoice = parseInt(prompt("please choose a number from 1 to 5"));
var pcRndNumber = numberGeneratorPc(0, 5);

function1(oddOrEvenUser, numberUserChoice, pcRndNumber);
