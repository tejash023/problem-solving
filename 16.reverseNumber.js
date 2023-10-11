const reverseNumber = (number)  => {
  let reversed = 0;
  while (number !== 0) {
    reversed = reversed * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reversed;
}

const originalNumber = 123456;
const reversedNumber = reverseNumber(originalNumber);

console.log(reversedNumber); 



