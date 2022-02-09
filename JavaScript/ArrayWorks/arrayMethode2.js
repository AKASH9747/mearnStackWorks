arr = [1, 2, 3, 6, 7, 8]
//create an array if num < 5 num-1 else num+1
// var newArray = arr.filter(num => num < 5 ? num - 1 : num + 1);
// console.log(newArray);


//print all numbers > 12

//total
var total = arr.reduce((n1, n2) => n1 + n2);
console.log(total);

//heighest
console.log(arr.reduce((n1, n2) => n1 > n2 ? n1 : n2));

//lowest
console.log(arr.reduce((n1, n2) => n1 < n2 ? n1 : n2));