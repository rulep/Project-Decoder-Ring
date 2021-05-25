// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";       
    const englishAlphabetArr = englishAlphabet.split('');       
    const newInput = input.toLowerCase().split('');             
    
    if (!alphabet || alphabet.length !== 26) {        
      return false;
    } 
    
    const alphabetArr = alphabet.split('');          

    for (let i = 0; i < alphabet.length; i++) {     
      const char = alphabet[i];
      const howMany = alphabetArr.filter(item => item === char).length;
      if (howMany > 1) {
        return false;
      }
    }

    if (!encode) {                                      
      return newInput.map((char) => {                
          if (!alphabetArr.includes(char)) {                
            return char;                                  
          }
            if (alphabetArr.includes(char)) {                       
                let index = alphabetArr.indexOf(char);           
                  return englishAlphabet.charAt(index);   
            }
      }).join('');                     
    }
     return newInput.map((char) => {      

          if (!englishAlphabetArr.includes(char)) {       
            return char;                                
        }                                               
            if (englishAlphabetArr.includes(char)) {               
              let index = englishAlphabetArr.indexOf(char);       
               return alphabet.charAt(index);               
        }
     }).join('');                                                
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
