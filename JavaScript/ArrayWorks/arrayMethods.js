arr = [10, 11, 12, 13, 14, 15];

//find square of all numbers
// var square = arr.map(num => num ** 2);
// console.log(square);

//find cube of all numbers
// var cube = arr.map(num => num ** 3);
// console.log(cube);

//print all number > 12
console.log(arr.filter(num => num > 12));

//print all even numbers
console.log(arr.filter(num => num % 2 == 0));

//print all odd numbers
console.log((arr.filter(num => num % 2 != 0)));