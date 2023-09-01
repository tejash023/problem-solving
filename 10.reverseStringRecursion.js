const reverseStringUsingRecursion = (input) => {
  if (input.length == 0) {
    return "";
  }

  return reverseStringUsingRecursion(input.slice(1)) + input[0];
};

console.log(reverseStringUsingRecursion("Tejash"));
