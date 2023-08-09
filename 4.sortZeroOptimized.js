const arr = [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1];

function sortZeroOptimized(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // Swap 0 and 1
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;

      index++;
    }
  }
}

sortZeroOptimized(arr);
console.log(arr);
