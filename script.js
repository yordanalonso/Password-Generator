// index option array to get random values based on user input of lenght and criteria of password 
function generatepassword() {
  var generatePassword = "";
  var numberOfCharacters = prompt("How many characters would you like your password to contain?");

 if(numberOfCharacters < 8 || numberOfCharacters > 128) {alert("Password must be longer than 8 or less than 128 characters"); return; }

var userSpecialCharType = confirm("Click ok to confrim including special characters.");
if (userSpecialCharType){
  password = password.concat(specialCharacters); }

  var userNumericCharType = confirm("Click Ok to confirm including numeric characters.");

  if(userNumericCharType) {
    password = password.concat(numericCharacters);
  }
  var userLowercaseCharType = confirm("Click Ok to confirm including lowercase characters.");

  if(userLowercaseCharType) {
   password = password.concat(lowercaseCharacters); }

  var userUppercaseCharType = confirm("Click on Ok to confirm including uppercase characters.");

 if(userUppercaseCharType) {
 password = password.concat(uppercaseCharacters); }

 for(i = 0; i < numberOfCharacters; i++) {
  generatePassword += getRandomvalueArray(password); }

  return generatedPassword;
 }
      


    
