// Assignment Code
var btngenerateEl = document.querySelector("#generate");
var upperEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerEl = 'abcdefghijklmnopqrstuvwxyz';
var numEl = '0123456789';
var specialEl = '~!@#$%^&*()_+=';

btngenerateEl.addEventListener("click", function () {
  var charLength = parseInt(prompt("Please type in a number between 8 and 128."));

  // userChoice["charLength"] = charLength; 
  console.log(charLength)
  var numChar = confirm("Would you like numbers?");
  var lowerChar = confirm("Would you like lowercase characters?");
  var upperChar = confirm("Would you like uppercase characters?");
  var special = confirm("Would you like special characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//setting up variables for different choices for character passwords
var upperEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerEl = 'abcdefghijklmnopqrstuvwxyz';


//creating an object to which we will save user choices
var userChoices = {};

//prompting the user to spefific character length
var charLength = parseInt(prompt("Please type in a number between 8 and 128."));

// userChoice["charLength"] = charLength; 
console.log(charLength)

// get user input
btngenerateEl.addEventListener("click", function () {
  promptUser()
    var numChar = confirm("Would you like numbers?");
    var lowerChar = confirm("Would you like lowercase characters?");
    var upperChar = confirm("Would you like uppercase characters?");
    var special = confirm("Would you like special characters?");
  };

  // saving user's answer when prompted question
  if (numChar) {
    userChoices["numEl"] = numEl;
  }
  if (lowerChar) {
    userChoices["lowerEl"] = lowerEl;
  }
  if (upperChar) {
    userChoices["upperEl"] = upperEl;
  }
  if (special) {
    userChoices["specialEl"] = specialEl;
  }

  // for (var key in userChoices) {
  //   console.log(key);
  //   console.log(userChoices[key]);
  //   if (userChoices[key]) {
  //     console.log(key);
  //      // do something about it like run some function to create a password

  //   }
  // }
  console.log(userChoices);
}

//calling the prompt function
promptUser();

// function generatePassword() {
//     var result = '';
//     for (var i = 0; i < charLength; i++) {
//       result += upperEl.charAt(Math.floor(Math.random() * upperEl.length));
//     }
//     return result;
// };

// console.log(generatePassword(charLength));

/*
*/
// '8' > 8
// string > Number
// '8' + '8' = '88';
// 8 + 8 = 16

// while charLength is less than or equal to 8 (parseInt(userChoices.charLength))
// loop over "El" properties and randomly grab a character from each value
// the random grab with me a functino called 'getRandom'
// once random number is grabbded, add character (concat) to a 'result' string (smilar to waht you have in your generate password function)
/*
  userChoices = {
    upperEl: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    lowerEl: 'abcdefghijklmnopqrstuvwxyz';
    numEl: '0123456789';
    specialEl: '~!@#$%^&*()_+=';
  }
*/

//where the magic happens
function writePassword() {
  let finalPassword = '';
  for (var i = 0; i < charLength; i++) { // as long as password length is still greater than 0 {

    let passwordEls = Object.keys(userChoices)
    let randomEl = passwordEls[Math.floor(Math.random() * passwordEls.length)]
    let char = getRandomCharacter(userChoices[randomEl]);

    finalPassword += char;

    console.log('RandomCharacter', char);
    console.log(finalPassword, finalPassword.length);
    console.log('>>>>>>>>>>>>>>>>', charLength)

    // for (key in userChoices) { // iterate over object
    //   // get random character
    //   let char = getRandomCharacter(userChoices[key]);
    //   console.log('RandomCharacter', char);
    //   // concat to final password
    //   finalPassword += char;
    //   console.log(finalPassword, finalPassword.length);
    //   charLength--;
    //   console.log('>>>>>>>>>>>>>>>>', charLength)
    // }

  }
  return finalPassword
}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

writePassword();

//document.getElementById("password").value = writePassword();

button.addEventListener("click", function () {
  password.innerHTML = writePassword();
})

const myInp = document.getElementById("password");
const btnCopy = document.getElementById("copy");

btnCopy.onclick = function () {
  myInp.select();
  document.execCommand("Copy");
}