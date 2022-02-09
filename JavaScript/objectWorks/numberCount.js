var arr = [10, 10, 20, 20, 30, 30, 40, 40, 50, 50, 50]
//number count

var newArray = {}

arr.map(num => num in newArray ? newArray[num] += 1 : newArray[num] = 1)
// console.log(newArray);