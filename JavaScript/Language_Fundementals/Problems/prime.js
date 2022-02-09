var num = 25, flag = 0;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = 1;
        // console.log(`${num} is Not a prime number it has factor ${i}`);
        break;
    }
}
console.log(flag == 0 ? `Prime` : `Non prime`);