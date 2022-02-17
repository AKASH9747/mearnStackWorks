
// var book = {
//     name: "aadujeevitham",
//     auther: "bennyman",
//     price: 450,
//     copies: 2000

// }
// var book = {
//     name: "twilight",
//     auther: "abc",
//     price: 4500,
//     copies: 5000

// }


// localStorage.setItem(book.name, JSON.stringify(book))
// var book = localStorage.getItem("twilight")
// console.log(book);

var book = JSON.parse(localStorage.getItem("twilight"))
console.log(book.price);
console.log("aadujeevitham" in localStorage);
console.log("game of thrones" in localStorage);