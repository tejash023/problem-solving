let rotateImageV2 = (input) => {
  const n = input.length - 1;
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      const temp = input[i][j];
      input[i][j] = input[j][i];
      input[j][i] = temp;
    }
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n / 2; j++) {
      if (j !== n - j) {
        const temp = input[i][j];
        input[i][j] = input[i][n - j];
        input[i][n - j] = temp;
        count++;
      }
    }
  }
};

let input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateImageV2(input);

console.log(input);
