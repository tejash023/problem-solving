const reverseStringUsingRecursion = (input, index = 0) => {
  if (index === input.length) {
    return "";
  }

  const reversedSubstring = reverseStringUsingRecursion(input, index + 1);

  return reversedSubstring + input[index];
};

console.log(reverseStringUsingRecursion("Tejash"));
