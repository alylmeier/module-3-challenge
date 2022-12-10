// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lcArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var ucArray= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCs = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

function generatePassword(){

    var length = prompt("How long do you want your password to be?");
    var numbers = confirm("Do you want numbers in your password?");
    var lowerCases = confirm("Do you want lowercases in your password?");
    var upperCases = confirm("Do you want uppercases in your password?");
    var special = confirm("Do you want special characters in your password?");
   
   var passwordArray = []
    if (numbers===true){
        passwordArray = passwordArray.concat(numbersArray);
    }
    if (lowerCases===true){
        passwordArray = passwordArray.concat(lcArray);
    }
    if(upperCases===true){
        passwordArray = passwordArray.concat(ucArray);
    }
     if(special===true){
        passwordArray = passwordArray.concat(specialCs);
     }
     var returnPassword = "";
    for (var i = 0; i < length; i++) {
        //returnPassword = returnPassword+ passwordArray[Math.floor(Math.random() * passwordArray.length)];
        var random = Math.floor(Math.random() * 4);

        returnPassword = passwordArray+random;

        //returnPassword = returnPassword+ passwordArray[Math.floor(Math.random() * passwordArray.length)]
    }
    return returnPassword
    }
    

    
// Write password to the #password input
function writePassword() {
  /*var length = prompt("How long do you want your password to be?");
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?"); */
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//length, numbers, lowerCases, upperCases, special) is what you had in the var password parenthese in write Password