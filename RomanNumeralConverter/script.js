// Roman numeral mappings
const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

// Convert to Roman numeral
function convertToRoman(num) {
  let result = "";
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

// Handle button click
document.getElementById("convert-btn").addEventListener("click", () => {
  const input = document.getElementById("number").value;
  const output = document.getElementById("output");

  if (!input) {
    output.textContent = "Please enter a valid number";
  } else if (input < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (input >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    const roman = convertToRoman(Number(input));
    output.textContent = roman;
  }
});
