const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decoded = '';
    for (let i=0; i<expr.length; i += 10) { 
        const letterCodePadded = expr.slice(i, i + 10);
        console.log(letterCodePadded);
        if (letterCodePadded === '**********') {
          decoded = decoded + ' ';
        } else {
        let morseCode = '';
        const letterCode = letterCodePadded.replace(/0*/, '');
        for (let j=0; j < letterCode.length; j += 2) {
          const symbol = +letterCode.slice(j, j+2);
          (symbol === 10) ? morseCode = morseCode + '.' : morseCode = morseCode + '-';
          }
        decoded = decoded + MORSE_TABLE[morseCode];
        }       
    }
    return decoded;
}

module.exports = {
    decode
}