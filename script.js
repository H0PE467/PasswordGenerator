// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwLenght = 0;
var addLowerCase = false;
var addUpperCase = false;
var addNumeric = false;
var addSpecialChar = false;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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

  addLowerCase = window.confirm("Add lowecases in your password?")
  addUpperCase = window.confirm("Add uppercases in your password?")
  addNumeric = window.confirm("Add numeric values in your password?")
  addSpecialChar = window.confirm("Add special characters in your password?")


  var selectedCharacters = 0;
  var tempPassw = "";

  if (addLowerCase==false && addUpperCase==false && addNumeric==false && addSpecialChar==false) {
    return "Error, select at least one parameter";
  }

  while (true) {

    //Add Lowercase

    if (addLowerCase == true) {

      if (getRandomInt(0,2)==1 ) {
        tempPassw = tempPassw + lowerCase[getRandomInt(0,26)];

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
      else{
        tempPassw = lowerCase[getRandomInt(0,26)] + tempPassw;

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
    }
    
    //Add Uppercase

    if (addUpperCase == true) {

      if (getRandomInt(0,2)==1 ) {
        tempPassw = tempPassw + upperCase[getRandomInt(0,26)];

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
      else{
        tempPassw = upperCase[getRandomInt(0,26)] + tempPassw;

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
    }

    //Add Numbers

    if (addNumeric == true) {

      if (getRandomInt(0,2)==1 ) {
        tempPassw = tempPassw + numbers[getRandomInt(0,10)];

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
      else{
        tempPassw = numbers[getRandomInt(0,10)] + tempPassw;

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
    }

    //Add Special Characters

    if (addSpecialChar == true) {

      if (getRandomInt(0,2)==1 ) {
        tempPassw = tempPassw + specialChar[getRandomInt(0,3)];

        selectedCharacters = selectedCharacters + 1;
        
        if (selectedCharacters == passwLenght) {
          break
        }
      }
      else{
        tempPassw = specialChar[getRandomInt(0,3)] + tempPassw;

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

/*
Pide Especificaciones
  Lenght
  lowerCase
  UpperCase
  Numeric
  Especial charactres

Selecciona un caracter dentro de las especificaciones

Lo añade al frente o al final de la contraseña

Si se llego al numero de veces prometido se rompe, si no ssigue con el siguiente grupo o se repite

Se muestra en la pagina




*/