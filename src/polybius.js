// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

    let polyAlphabet = {
      '11': 'a',
      '21': 'b',
      '31': 'c',
      '41': 'd',
      '51': 'e',
      '12': 'f',
      '22': 'g',
      '32': 'h',
      '42': 'i/j',
      '52': 'k',
      '13': 'l',
      '23': 'm',
      '33': 'n',
      '43': 'o',
      '53': 'p',
      '14': 'q',
      '24': 'r',
      '34': 's',
      '44': 't',
      '54': 'u',
      '15': 'v',
      '25': 'w',
      '35': 'x',
      '45': 'y',
      '55': 'z'
    };
    
    let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    normalAlphabet = normalAlphabet.split(''); 
  
  function polybius(input, encode = true) {
    polyNumbers = Object.keys(polyAlphabet);
    polyLetters = Object.values(polyAlphabet);
    
    if(encode) {
    let result = "";
    let numberIndex = "";
    input.toLowerCase().split('').forEach((char) => {
      if (!normalAlphabet.includes(char)) {
        result += char;
        return result;
      } else {
          if (char === 'i' || char === 'j') {
              numberIndex = '42'
          } else {
              const matchingLetter = polyLetters.find((letter) => letter === char)
              const letterIndex = polyLetters.indexOf(matchingLetter);
              numberIndex = polyNumbers[letterIndex];
            }
        result += numberIndex;
      }
    })
      return result;
    }  

   if (!encode) {
    let inputSpaceless = input.replace(/ /g, '');
    if (inputSpaceless.length % 2 !== 0) {
      return false;
    } else {
      let decoded = "";
      let splitPairs = [];
      input.split(" ").forEach((word) => {
      splitPairs.push(word.match(/.{1,2}/g));
    });
      splitPairs.forEach((word, index) => {
      word.forEach((pair) => {
      if (pair == ' ') {
        decoded += pair;
      } else if (pair == '42') {
        decoded += '(i/j)';
      } else {
        const matchingKey = polyNumbers.find((number) => number === pair);
        const matchingIndex = polyNumbers.indexOf(matchingKey);
        const newLetter = polyLetters[matchingIndex]
        decoded += newLetter;
      }
    })
      if (index !== splitPairs.length - 1) {
        decoded += " ";
      }
    })
      return decoded;
   }
  }
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
