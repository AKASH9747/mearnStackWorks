var arr = [10, 20, 10, 20, 11, 12, 11];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log(arr[i]);
        }
    }
}