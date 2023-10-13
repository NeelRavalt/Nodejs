var randomNumber = Math.random() * 100;  // Generate a random number between 0 and 100
var randomNumberAsInt = parseInt(randomNumber); // Convert it to an integer (rounds down)
document.write(randomNumberAsInt);

var isValidInput = false;

while (!isValidInput) {
  var a = Number(window.prompt('Enter a number between 1 and 100:'));

  if (isNaN(a)) {
    document.write('Please enter a valid number.');
  } else if (a === randomNumberAsInt) {
    document.write('You got this number');
    isValidInput = true;
  } else if (a > randomNumberAsInt) {
    document.write('Your number is bigger than the actual number');
  } else if (a < randomNumberAsInt) {
    document.write('Your number is smaller than the actual number');
  } else {
    document.write('Please enter a number between 1 and 100');
  }
}
