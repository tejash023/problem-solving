const capitalizeFirstWord = (input) => {
  if (input.length == 0) {
    return "";
  }

  return input[0].toUpperCase() + input.slice(1);
};

console.log(capitalizeFirstWord("tejash raj vardhan"));
