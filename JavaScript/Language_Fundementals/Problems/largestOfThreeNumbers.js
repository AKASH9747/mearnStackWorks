var num1 = 100;
var num2 = 5050;
var num3 = 700;
var largest = 0;
var secondLargest = 0;

if (num1 > num2 && num1 > num3) {
    largest = num1;
    console.log(`largest number is ${largest}`);
} else if (num2 > num1 && num2 > num3) {
    largest = num2;
    console.log(`largest number is ${largest}`);
} else if (num3 > num1 && num3 > num2) {
    largest = num3;
    console.log(`largest number is ${largest}`);
} else if (num1 == num2 && num2 == num3) {
    console.log(`Numbers are qeual`);
}
