var num1 = 750;
var num2 = 850;
var num3 = 900;

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }

} else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
    }

} else if (num1 == num2 && num2 == num3) {
    console.log(`Numbers are equal`);
}
