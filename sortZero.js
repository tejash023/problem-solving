const arr = [1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1];

// function sortZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == 1 && arr[j] == 0) {
//         //Swap
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// }

// sortZero(arr);
// console.log(arr);

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
