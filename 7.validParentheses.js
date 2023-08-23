const validParentheses = (input) => {
  const inputArr = input.split("");
  const [firstElement] = inputArr;

  if (!["(", "{", "["].includes(firstElement)) {
    return false;
  }

  const stackArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    const currentElement = inputArr[i];
    const recentlyPushedStackedElement = stackArr[stackArr.length - 1];

    if (recentlyPushedStackedElement === "(" && currentElement === ")") {
      stackArr.pop();
      continue;
    }

    if (recentlyPushedStackedElement === "{" && currentElement === "}") {
      stackArr.pop();
      continue;
    }

    if (recentlyPushedStackedElement === "[" && currentElement === "]") {
      stackArr.pop();
      continue;
    }

    stackArr.push(currentElement);
  }

  return stackArr.length === 0;
};

console.log(validParentheses("({}[]"));
