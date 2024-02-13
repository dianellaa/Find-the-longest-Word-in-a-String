function findLongestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");
  
    // Initialize a variable to hold the length of the longest word
    let maxLength = 0;
  
    // Iterate over each word to find the length of the longest word
    for (let i = 0; i < words.length; i++) {
      const wordLength = words[i].length;
      // Update maxLength if the length of the current word is greater
      if (wordLength > maxLength) {
        maxLength = wordLength;
      }
    }
  
    // Return the length of the longest word
    return maxLength;
  }
  
  // Test cases
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: 6
  console.log(findLongestWord("May the force be with you")); // Output: 5
  