var string = "hello"
var vowels = ["a", "e", "i", "o", "u"]
Array.from(string).filter(char => vowels.includes(char)).forEach(char => console.log(char))