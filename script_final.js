// Declare global variables: DOM elements
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const pass = document.getElementById("password");

const generateBtnEl = document.querySelector("#generateBtn");

// Add click event for generateBtn
  pass.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length,
  );


// generate password function
// generator functions: http://www.net-comber.com/charset.html
function generatedPassword(lower, upper, number, symbol, length) {
  // init password variable
  let generatedPassword = "";

  //counts number of checked values
  const typeCount = lower + upper + number + symbol;
  // filter out unchecked types from array of vars
  // create array of objects to get value of checked settings
  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
    //if unchecked it will return value of false and will be filtered out
  );
  // if nothing checked
  if (typeCount === 0) {
    return '';
  }
  // loop over length call generator function for each type
  // want to increment by number of checked boxes
  for (let i = 0; i < length; i += typeCount) {
    typeArr.forEach(type => {
      //passing type into object keys
      const fName = Object.keys(type)[0];
      generatedPassword += randomPass[fName]();
    });
  }
}

// create object of functions getRandomLower, getRandomUpper, etc.
const randomPass = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

  // + = alternative to parseInt function (returns number from string)

generateBtnEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;


    return generatePassword;
});



  // If no selections are made in settings




  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;


// get random letters and numbers (26 = number of letters in alphabet)
// math.floor(math.random()) will produce random integer within these limits (rounds to integer less than value)
//char code source: http://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// 97 = charcode of lowercase a

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// 65 = charcode of uppercase A

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//48 = number 0; 10 = length of array from 0-9

//generates a random symbol from string symbols
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

