var num = 5;

if (num < 0) {
    console.log(`Factorial of -ve numbers do not exist`);
} else if (num == 0) {
    console.log(`Factorial of ${num} is 1`);
} else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`Factorial of given ${num} is ${fact}`);

}