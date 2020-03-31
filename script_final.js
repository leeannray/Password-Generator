// Declare global variables
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const pass = document.getElementById("#password")

const get = document.querySelector("#generateBtn");

const randomPass = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}
// Add click event for generateBtn
get.addEventListener("click", function() {
  const text = document.createElement('textarea');
  const password = pass.innerText;
  if (!password) { return; }
  textarea.value = password;
});

const randomPass = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


$("#generateBtn").click(function() {
  let length = +lengthEl.value;
  let hasLower = lowercaseEl.checked;
  let hasUpper = uppercaseEl.checked;
  let hasNumber = numbersEl.checked;
  let hasSymbol = symbolsEl.checked;

  generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
    return generatePassword;
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typeCount = lower + upper + number + symbol;
  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );

  // If no selections are made in settings
  if (typeCount === 0) {
    return "";
  }

  // create a loop
  for (let i = 0; i < length; i += typeCount) {
    typeArr.forEach(type => {
      const pass = Object.keys(type)[0];
      generatedPassword += randomPass[pass]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;

}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

