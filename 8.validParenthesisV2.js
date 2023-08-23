const validParenthesesV2 = (input) => {
  const pairsMapping = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  if (!pairsMapping.hasOwnProperty(input[0])) {
    return false;
  }

  const stackArr = [];

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]; // ]
    const recentlyPushedStackedElement = stackArr[stackArr.length - 1];

    if (pairsMapping[recentlyPushedStackedElement] === currentElement) {
      stackArr.pop();
      continue;
    }

    stackArr.push(currentElement);
  }

  return stackArr.length === 0;
};

console.log(validParenthesesV2("[{}]"));
