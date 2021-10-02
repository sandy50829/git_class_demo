

// get input dom
const userInput = document.getElementById('user-input');

// get bottom dom
const bottom = document.getElementById('btn');

// generate random nubmer 1 - 6
const ramdomNumber = generateRamdomNumber(6);

console.log(ramdomNumber);
// on click event of bottom ->
bottom.addEventListener('click', function () {
  // get input value from input dom
  let userInputVal = userInput.value;
  if (userInputVal === '') {
    alert('please insert valid number 1 - 6');
    return;
  }

  userInputVal = parseInt(userInputVal);

  if (userInputVal === ramdomNumber) {
    alert('You got it !!!');
    return;
  }

  // compare the value between user-iput and ramdom
  userInputVal < ramdomNumber ? alert('greater !!') : alert('smaller !!');
});
