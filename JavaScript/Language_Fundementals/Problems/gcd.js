var num1 = 12;
var num2 = 48;
var gcd;
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        gcd = i;
    }
}
console.log(`GCD is ${gcd}`);
