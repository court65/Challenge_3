// Assignment code here
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!","?", "@", "#", "$", "^", "&", "*", "(", ")", "+"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function userOptions() {


  var passwordLength = parseInt(
  prompt("Pick How Many Characters Long Would You Like Your Password To Be? Minimum of 8 and Maximum of 128 ")
  );

if (isNaN(passwordLength)=== true){
  alert("Password Length Must Be a Number");
  return;
}

if (passwordLength <8 || passwordLength>128){
  alert("Please pick a Number between 8 and 128");
  return;
}

var includeLowercase = confirm("Click Ok if you want to use lowercase letters");
var includeUppercase = confirm("Click Ok if you want to use Uppercase letters");
var includeNumbers = confirm("Click Ok if you want to use Numbers");
var includeSymbols = confirm("Click Ok if you want to use Symbols");

if(
  includeLowercase===false &&
  includeUppercase===false &&
  includeNumbers===false &&
  includeSymbols===false
){
  alert(" You must choose atleast 1 option");
  return;
}

var userPicks = {
  passwordLength: passwordLength, 
  includeLowercase: includeLowercase,
  includeNumbers: includeNumbers,
  includeSymbols: includeSymbols
};
console.log(userPicks);

return userPicks;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function randomGenerator(array){
  var generatedIndex=Math.floor(Math.random() * array.length);
  var generatedChoice=array[generatedIndex];

  return generatedChoice;
}

// Add event listener to generate button
generateBtn.addEventListener("click", userOptions);
// generateBtn.addEventListener("click", writePassword);
