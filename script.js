// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwLenght = 0;
var addLowerCase = false;
var addUpperCase = false;
var addNumeric = false;
var addSpecialChar = false;


// Pool of letters to take of
lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
numbers = ["1","2","3","4","5","6","7","8","9","0"]
specialChar = ["?","%","="]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generatePassword() {
  passwLenght = window.prompt("How long will your password be? (8-124)")
  passwLenght = Number(passwLenght)

  if (isNaN(passwLenght)) {
    console.log("Hello")
    return "Error, Not a Number";
  }

  else if(8 > passwLenght || 128 < passwLenght){
    return "Error, Number exceeds limits";   
  }

  //Prompts
  addLowerCase = window.confirm("Add lowecases in your password?")
  addUpperCase = window.confirm("Add uppercases in your password?")
  addNumeric = window.confirm("Add numeric values in your password?")
  addSpecialChar = window.confirm("Add special characters in your password?")

  var selectedCharacters = 0;
  var tempPassw = "";

  //Check that at least one pool of characters is selected

  if (addLowerCase==false && addUpperCase==false && addNumeric==false && addSpecialChar==false) {
    return "Error, select at least one parameter";
  }

  while (true) {

    //Add Lowercase

    if (addLowerCase == true) {

      if (getRandomInt(0,2)==1 ) {
         //Add at the end
        tempPassw = tempPassw + lowerCase[getRandomInt(0,lowerCase.length)];

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }

      else{
        //Add at the begging
        tempPassw = lowerCase[getRandomInt(0,lowerCase.length)] + tempPassw;

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
    }
    
    //Add Uppercase

    if (addUpperCase == true) {

      if (getRandomInt(0,2)==1 ) {

         //Add at the end
        tempPassw = tempPassw + upperCase[getRandomInt(0,upperCase.length)];

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
      else{
        //Add at the begging
        tempPassw = upperCase[getRandomInt(0,upperCase.length)] + tempPassw;

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
    }

    //Add Numbers

    if (addNumeric == true) {

      if (getRandomInt(0,2)==1 ) {
        //Add at the end
        tempPassw = tempPassw + numbers[getRandomInt(0,numbers.length)];

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
      else{
        //Add at the begging
        tempPassw = numbers[getRandomInt(0,numbers.length)] + tempPassw;

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
    }

    //Add Special Characters

    if (addSpecialChar == true) {

      if (getRandomInt(0,2)==1 ) {
        //Add at the end
        tempPassw = tempPassw + specialChar[getRandomInt(0,specialChar.length)];

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
      else{
        //Add at the begging
        tempPassw = specialChar[getRandomInt(0,specialChar.length)] + tempPassw;

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
    }
  }

  return tempPassw;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



