/**
 * 1. Split the sentence into an array of words
 * 2. Initialize the longestWord variable with an empty string
 * 3. Iterate through each word in the array
 * 4. To Check if the current word is longer than the current longest word
 * 5. Update the longest word if the current word is longer
 */

function longestWord(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const sentence = "My name is ankit jain & i'm from morena";
console.log(longestWord(sentence));
