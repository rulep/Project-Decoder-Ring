// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    }                       
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const alphabetArr = alphabet.split('');
      const newInput = input.toLowerCase().split('');
      
      return newInput.map((char) => {
        let output = []; 
    if (!alphabetArr.includes(char)) {  
      output.push(char);             
      return output;
    }
    if (alphabetArr.includes(char)) {                   
      let index = alphabetArr.indexOf(char);      
      let indexSum = index + shift;               
      if (!encode) {
        indexSum = index - shift;
        if (indexSum > 25) {
          indexSum -= 26;
          } else if (indexSum < 0) {
            indexSum += 26;
          } 
        } else {
            if (indexSum > 25) {
                indexSum -= 26;
            } else if (indexSum < 0) {
              indexSum += 26;
            }   
        }
    output.push(alphabet.charAt(indexSum));          
    return output;
    }
      }).join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
