export const ROMAN_NUMERALS_LIMIT = { MIN: 1, MAX: 3999 };

export const convertToRoman = num => {
  if (num > ROMAN_NUMERALS_LIMIT.MAX || num < ROMAN_NUMERALS_LIMIT.MIN) {
    return {
      error: `Please use numbers from ${ROMAN_NUMERALS_LIMIT.MIN} to ${
        ROMAN_NUMERALS_LIMIT.MAX
      }`
    };
  }

  let remainingValue = Number(num);

  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  const roman = romanNumerals.reduce((numeralString, numeral) => {
    // get values from romanNumerals with array destructuring
    const [romanSymbol, value] = numeral;
    let numberOfSymbols = Math.floor(remainingValue / value);
    remainingValue -= value * numberOfSymbols;
    return (numeralString += romanSymbol.repeat(numberOfSymbols));
  }, "");

  return { roman };
};
