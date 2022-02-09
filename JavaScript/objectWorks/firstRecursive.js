var string = "BABABBC"
//print 1st recursive character
var newArray = {}

// Array.from(string).map(char => char in newArray ? newArray[char] = `${char} 1st recursive` : newArray[char] = 1)
// console.log(newArray);

for (let char of string) {
    if (char in newArray) {
        console.log(`${char} 1st recursive`);
        break;
    } else {
        newArray[char] = 1
    }
}