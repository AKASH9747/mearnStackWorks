var arr = [10, 23, 40, 5, 6, 2, 30, 2];

var element = 2;
var flag = 0;

// for (let values of arr) {
//     if (element == values) {
//         flag = 1;
//         break;
//     }
// }
// console.log(flag == 0 ? `Not found` : `Found`);

// for (let index in arr) {
//     if (element == arr[index]) {
//         console.log(`position`, index);
//         flag = 1;

//     }
// }
// console.log(flag == 0 ? "Not Found" : "Found");

// iteration using length

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
