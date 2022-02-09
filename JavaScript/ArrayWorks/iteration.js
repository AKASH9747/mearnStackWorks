// var arr = [4, 5, 6];

// var sum = 0;

// for (let num of arr) {
//     sum += num;
// }
// for (let num of arr) {
//     console.log(sum - num);
// }
// console.log(`total sum`, sum);

// To push to another array

var arr = [4, 5, 6];

var sum = 0;
var op = [];

for (let num of arr) {
    sum += num;
}
for (let num of arr) {

    op.push(sum - num)
}
console.log(op);