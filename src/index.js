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
  return expr
    .split(" ")
    .map((value) =>
      value
        .split("")
        .map((value2) => Object.keys(MORSE_TABLE).find((key) => MORSE_TABLE[key] === value2))
        .map((value) =>
          value
            .split("")
            .map((value) => (value === "." ? "10" : "11"))
            .join("")
        )
        .map((value) => (value.length < 10 ? "0".repeat(10 - value.length) + value : value))
        .join("")
    )
    .join("**********");
}

module.exports = {
  decode,
};
