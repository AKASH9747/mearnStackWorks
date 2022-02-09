var num1 = 750;
var num2 = 850;
var num3 = 900;

var secondLargest = 0;

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        secondLargest = num2;
    } else {
        secondLargest = num3
    }
    console.log(`secondLargest is ${secondLargest}`);
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        secondLargest = num1;
    } else {
        secondLargest = num3
    }
    console.log(`secondLargest is ${secondLargest}`);

} else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
        secondLargest = num1;
    } else {
        secondLargest = num2;
    }
    console.log(`secondLargest is ${secondLargest}`);

} else if (num1 == num2 && num2 == num3) {
    console.log(`Numbers are equal`);
}

