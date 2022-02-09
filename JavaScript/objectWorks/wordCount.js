var text = "hello hai hello hai hai"
//word count
//spliting string text
var words = text.split(" ")
console.log(words);
var wordCount = {}

// for (let word of words) {
//     if (word in wordCount) {
//         wordCount[word] += 1
//     } else {
//         wordCount[word] = 1
//     }
// }
// console.log(wordCount);

// text.split(" ").map(word => word in wordCount ? wordCount[word] += 1 : wordCount[word] = 1)
// console.log(wordCount);