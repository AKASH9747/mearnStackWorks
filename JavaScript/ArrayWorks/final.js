var arr = [
    [10, 50],
    [20, 60],
    [1, 2],
    [5, 8],
    [30, 40]
]
//print all numbers > 10
// arr.flat().filter(num => num > 10).forEach(num => console.log(num))

//print squares of all numbers
// arr.flat().map(num => num ** 2).forEach(result => console.log(result))

//print total sum
arr.flat().reduce((num1, num2) => num1 + num2).forEach(num => console.log(num))

//print heighest number
// arr.flat().reduce((num1, num2) => num1 > num2 ? num1 : num2).forEach(num => console.log(num))


