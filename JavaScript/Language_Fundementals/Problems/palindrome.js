var num = 123211;
var str = "";
var temp = num;
while (num != 0) {
    let lastDigit = num % 10; //123%10=3
    str = str + lastDigit;   //3
    num = Math.floor(num / 10);
}
if (temp == str) {
    console.log(`${str} is palindrome`);
} else {
    console.log(`not`);
}
