var arr = [30, 50, 60, 70, 4, 7];

arr.sort((n1, n2) => n1 - n2);

var sum = 11;
var lower = 0;
var upper = arr.length - 1;

while (lower < upper) {
    let currentSum = arr[lower] + arr[upper];
    if (sum == currentSum) {
        console.log(`The pairs for the sum ${sum} is ${arr[lower]} & ${arr[upper]}`);
        break;
    } else if (currentSum < sum) {
        lower++;
    }
    else if (currentSum > sum) {
        upper--;
    }
}
