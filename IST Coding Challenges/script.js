
function convertNumberToRomanNumeral(e) {
  if (e.preventDefault) e.preventDefault();
  var num = e.target.querySelector('#numberInput').value;

  //List the values in the array
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  //Check each value and if it corresponds with the function parameters
  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    num >= romanNumerals[i].value;
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      var numeral = romanNumerals[i].value;
      num -= numeral;
    }
  }

  //Write the result
  printResult(e, result);

}



function checkPalindrome(e) {
  if (e.preventDefault) e.preventDefault();
  let inputString = document.getElementById("enterword").value;

  // Remove spaces and convert to lowercase
  inputString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the string
  const reversedString = inputString.split("").reverse().join("");

  // Check if the input is equal to the output
  if (inputString === reversedString) {
    printResult(e, "This is a palindrome!");
  } else {
    printResult(e, "This is not a palindrome!");
  }


}







function convertTextToMorseCode(e) {
  e.preventDefault();
  const text = e.target.querySelector('#textInput').value;
  const morseCodeMap = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    "'": '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.'
  };
  let morseCode = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    console.log(char)
    if (morseCodeMap[char]) {
      morseCode += morseCodeMap[char] + ' ';
    }
  }
  document.querySelector('#morseCodeOutput').innerHTML = morseCode;
}







function checkPangram(e) {
  if (e.preventDefault) e.preventDefault();

  let inputString = document.getElementById("inputString").value.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letters = {};

  
  for (let i = 0; i < inputString.length; i++) {
    let letter = inputString[i];
    if (alphabet.indexOf(letter) !== -1) {
      letters[letter] = (letters[letter] || 0) + 1;
    }
  }

 
  for (let i = 0; i < alphabet.length; i++) {
    if (!letters.hasOwnProperty(alphabet[i])) {
      printResult(e, "This is not a pangram!");
      return;
    }
  }

  
  let letterArray = Object.keys(letters).map(function(key) {
    return [key, letters[key]];
  });
  letterArray.sort(function(a, b) {
    return b[1] - a[1];
  });

  
  let table = "<table><tr><th>Letter</th><th>Count</th></tr>";
  for (let i = 0; i < 5; i++) {
    if (i >= letterArray.length) break;
    table += "<tr><td>" + letterArray[i][0] + "</td><td>" + letterArray[i][1] + "</td></tr>";
  }
  table += "</table>";

  printResult(e, "This is a pangram!" + table);
}


function printResult(e, text) {
  e.target.querySelector('.result').setHTML(text);
}

document.querySelector("#saveButton").addEventListener("click", changeMode);

function changeMode() {
    if (document.querySelector("#dark").checked == true) {
        darkMode();
    } else {
        lightMode();
    }
}

function darkMode() {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
}

function lightMode() {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
}

document.getElementById("pangram").addEventListener("submit", checkPangram);

document.getElementById('pallindrome').onsubmit = checkPalindrome;

document.getElementById('converter').onsubmit = convertNumberToRomanNumeral;

document.getElementById('converter2').onsubmit = convertTextToMorseCode;

function changeColour() {
    let colour = document.getElementById('colourInputText').value;
    document.body.style.backgroundColor =  colour;
}