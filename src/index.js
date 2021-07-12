const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let arr2 = [];
  let arr3 = [];

  let iter = expr.length / 10;
  for (let i = 0; i < iter; i++) {
    arr.push(expr.substr(10 * i, 10));
  }
  for (let i = 0; i < arr.length; i++) {
    for (let e = 0; e < 5; e++) {
      arr2.push(arr[i].substr(2 * e, 2));
    }
    arr2.push(" ");
  }
  let e = "";
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "10") {
      e += ".";
    } else if (arr2[i] === "11") {
      e += "-";
    } else if (arr2[i] === "**") {
      e += " ";
    } else if (arr2[i] === " ") {
      arr3.push(e);
      e = "";
    }
  }
  return arr3
    .map((value) => MORSE_TABLE[value])
    .map((value) => (value === undefined ? " " : value))
    .join("");
}

module.exports = {
  decode,
};
