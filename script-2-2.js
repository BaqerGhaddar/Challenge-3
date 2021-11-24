// Assignment code here
function generatePassword () {
  var passwordLength = prompt("how long do you want the password to be, between 8 to 128 characters long")
  console.log(passwordLength)
  console.log(typeof passwordLength)
  var includesLowercase = confirm("would you like to use lowercase letters?")
  var includesUppercase = confirm("would you like to use uppercase letters?")
  var includesNumeric   = confirm("would you like to use numeric?")
  var includesSpecialCharacters = confirm("would you like to use special characters?")
   console.log(includesLowercase)
 
  if (passwordLength < 8 || passwordLength > 128) {
    console.log("password is short")
    alert("password length must be at least 8 to 128 characters long")
    return
  }
  
  if (!(includesLowercase || includesUppercase || includesNumeric || includesSpecialCharacters)){
    alert("password must contain at least 1 type of characters")
    
    return
  }
  
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "0123456789"
  var specailCharacters = "!@#$%&*"
  var availableChars = ""

  if (includesLowercase) {
    availableChars += lowercase

  }

  if (includesUppercase){
    availableChars += uppercase
  }

  if (includesNumeric){
    availableChars += numeric
  }

  if (includesSpecialCharacters){
    availableChars += specailCharacters
  }
  var generatedPassword = ""
  console.log (availableChars)
  
  for (let i = 0; i < passwordLength ; i++) {
    var randomNumber = Math.floor(Math.random()*availableChars.length)
    var selectedCharacter = availableChars.charAt(randomNumber)
    generatedPassword = generatedPassword + selectedCharacter
  }
  
  



  return generatedPassword 

}
  
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
