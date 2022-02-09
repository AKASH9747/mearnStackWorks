var num = 1535, reminder, sum = 0;
var temp = num;
while (num > 0) {
    reminder = num % 10;
    sum = sum + (reminder * reminder * reminder); //reminder**3
    num = Math.floor(num / 10);

}
if (temp == sum) {
    console.log(`${sum} is Amstrong`);
} else {
    console.log(`${sum} is Not Amstrong`);
}