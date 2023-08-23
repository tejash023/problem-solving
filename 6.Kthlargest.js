// let arr = [1, 3, 5, 2, 6, 7, 4];
// k = 5;

// for (let i = 0; i < k; i++) {
//   let maxIndex = 0;
//   let maxNumber = Number.NEGATIVE_INFINITY;
//   for (let j = 0; j < arr.length; j++) {
//     if (maxNumber < arr[j]) {
//       maxNumber = arr[j];
//       maxIndex = j;
//     }
//   }
//   console.log(maxNumber);
//   arr[maxIndex] = null;
// }

const array = [25, 29, 35, 22, 47];
const obj = {};

for (let i = 0; i < array.length; i++) {
  obj[i] = obj.hasOwnProperty(i) ? obj[i] + 1 : 1;
}

console.log(obj);
