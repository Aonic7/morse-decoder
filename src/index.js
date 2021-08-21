const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrcode = [];
    let arrcodefull = expr.split("");
    for (let i = 0; i < expr.length; i++) {
        let symbol = arrcodefull.slice(0, 10).join("");
        arrcode.push(symbol);
        arrcodefull.splice(0, 10);
    }

    for (let i = 0; i < arrcode.length; i++) {
        if (arrcode[i] === "**********") {
            arrcode[i] = " ";
        } else {
            arrcode[i] = arrcode[i]
                .replace(/00/g, "")
                .replace(/10/g, ".")
                .replace(/11/g, "-");
            arrcodefull.push(arrcode[i]);
        }
    }
    for (const [key, value] of Object.entries(MORSE_TABLE)) {
        for (let i = 0; i < arrcode.length; i++) {
            if (arrcode[i] == key) {
                arrcode[i] = value;
            }
        }
    }
    return arrcode.join("");
} // write your solution here


module.exports = {
    decode
}