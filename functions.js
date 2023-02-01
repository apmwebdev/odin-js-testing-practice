const functions = (() => {
  const capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const reverseString = function(string) {
    return string.split('').reverse().join('');
  }
  
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  }
  
  const caesarCipher = function(string, shift) {
    const shiftLetter = function(letter, shift) {
      if (letter.match(/[A-Z]/)) {
        const shiftedLetterCode = ((letter.charCodeAt(0) + shift - 65) % 26) + 65;
        return String.fromCharCode(shiftedLetterCode);
      } else if (letter.match(/[a-z]/)) {
        const shiftedLetterCode = ((letter.charCodeAt(0) + shift - 97) % 26) + 97;
        return String.fromCharCode(shiftedLetterCode);
      } else {
        return letter
      }
    }
    
    return string.split('').reduce((output, letter) => {
      return output + shiftLetter(letter, shift);
    }, '');
  }
  
  const analyzeArray = function(array) {
    return {
      average: array.reduce((sum, current) => sum + current, 0) / array.length,
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length
    }
  }
  
  return {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
})();

export default functions;
