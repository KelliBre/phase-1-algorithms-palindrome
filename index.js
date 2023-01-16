function isPalindrome(word) {
  // Write your algorithm here
  let splitWord = word.split("");
  let reversedArray = splitWord.reverse();
  let joinedString = reversedArray.join("");

  if(joinedString !== word){
    return false;
  } else {
    return true;
  }


}



/* 
  Add your pseudocode here
  Split() to return a new array made of of characters of word
  use reverse() to reverse array
  Use join() to create new string
  compare new string to word if true return true else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
