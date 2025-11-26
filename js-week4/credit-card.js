/** @format */

const formattedCreditCard = {
  cardNumber: 123456789,
  formatted: "1234 5678 9",
};

function formatCreditCardNumber(number) {
  if (isNaN(Number(number))) {
    console.log("Error: Input must be numeric.");
    return null;
  }
  const str = number.toString();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if ((i + 1) % 4 === 0 && i !== str.length - 1) {
      result += " ";
    }
  }
  return result;
}
function creditCardType(str) {
  const numberOfCharacters = str.length;
  switch (numberOfCharacters) {
    case 14:
      console.log("Visa Card");
      break;
    case 15:
      console.log("Express");
      break;
    case 16:
      console.log("Master Card");
      break;
    default:
      console.log("Unknown Card Type");
  }
}
console.log(formatCreditCardNumber("123456789"));
creditCardType("12345678901234222");
