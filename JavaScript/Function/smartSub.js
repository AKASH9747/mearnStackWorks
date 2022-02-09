

function smartSub(num1, num2) {
    // let temp = 0;
    // if (num1 < num2) {
    //     temp = num1;
    //     num1 = num2;
    //     num2 = temp;
    // }

    // return num1 - num2;

    return num1 > num2 ? num1 - num2 : num2 - num1;
}

console.log(smartSub(10, 40));

// Arrow Function

var smartSub = (num1, num2) => num1 > num2 ? num1 - num2 : num2 - num1;
console.log(smartSub(10, 40));