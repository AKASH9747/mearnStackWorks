// var num = 2;
// var i = 1;
// var sum = 0;
// var str = "";
// while (i <= num) {
//     str += num;
//     sum = sum + Number(str)
//     i++;
// }
// console.log(sum);

var num = 3;
var sum = 0;
var total = 0;
for (i = 1; i <= num; i++) {
    sum = sum * 10 + num;
    total = total + sum;
}
console.log(total);