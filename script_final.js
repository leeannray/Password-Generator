// Declare global variables
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const get = document.querySelector("#generateBtn");

// Add click event for generateBtn
get.addEventListener("click", function() {
  let password = finalPassword;
  document.getElementById("password").text = password;
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

  // Doesn't have a selected type
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

