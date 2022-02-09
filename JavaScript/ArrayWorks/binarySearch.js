var arr = [1, 3, 5, 6, 8, 12, 15];
var low = 0, upp = arr.length - 1;
var element = 12;
var flag = 0;
var count = 1;

while (low <= upp) {
    let mid = Math.floor((low + upp) / 2)
    //case 1
    if (element > arr[mid]) {
        low = mid + 1;
    }
    //case 2
    else if (element < arr[mid]) {
        upp = mid - 1;
    }
    //case 3
    else if (element == arr[mid]) {
        flag = 1;
        break;
    }
    count++;
}
console.log(count);
console.log(flag == 0 ? `element not found` : `element found`);