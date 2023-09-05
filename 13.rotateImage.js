function rotateImage(input) {
  let output = [];
  let newArray = [];
  for (let i = 0; i < input.length; i++) {
    let n = input.length - 1;
    for (let j = 0; j < input.length; j++) {
      newArray.push(input[n][i]);
      n--;
    }
  }
  output.push(newArray);
  return output;
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//rotateImage(input);
console.log(rotateImage(input));

//console.log(input[0].length);
