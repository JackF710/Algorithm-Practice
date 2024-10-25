function decimalBinary(decimal) {
  let binary = "";
  if (decimal === 0) {
    return 0;
  }
  while (decimal > 0) {
    let remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}
console.log(decimalBinary(13));
