// Una funzione per capire se la parola è
// palindroma
// L'utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.



function function1 (oddOrEven, numberChoice, pcNumber) {

  var oddOrEven = prompt("Please choose between: odd or even");
  var numberChoice = parseInt(prompt("please choose a number from 1 to 5"));
  var pcNumber = Math.floor(Math.random() * 6 + 1);

  console.log("User chose " + oddOrEven + " and has chosen " + numberChoice + " for number. " + "The random number generated for the pc is " + pcNumber);

  // if ((oddOrEven == "odd") && (oddOrEven == "even")) {
  //   console.log("choice accepted")
  //
  // } else {
  //   alert("The choices are 'odd' or 'even', please refresh the page to try again.");
  // }

  if (numberChoice < 6) {
    console.log(oddOrEven, numberChoice);

  } else if (numberChoice >= 6) {
    console.log(oddOrEven, numberChoice);
    alert("Insert a number from 1 to 5, please refresh the page to try again.");
  }

  var sum = numberChoice + pcNumber;
  var odd = sum % 2 == 1;
  var even = sum % 2 == 0;

}

function1();
