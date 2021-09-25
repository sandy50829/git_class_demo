function generateRamdomNumber(maxNum) {
  const random = Math.random(); // 0 - 0.99999999999
  // 0.9 * 6 -> 0 - 5
  const intNum = Math.floor(random * maxNum);
  const result = intNum + 1;
  return result;
}

// get input dom
const userInput = document.getElementById('user-input');

// get bottom dom
const bottom = document.getElementById('btn');

// generate random nubmer 1 - 6
const ramdomNumber = generateRamdomNumber(6);

console.log(userInput, bottom, ramdomNumber);
// on click event of bottom ->
// get input value from input dom

// compare the value between user-iput and ramdom

// repsond to user
