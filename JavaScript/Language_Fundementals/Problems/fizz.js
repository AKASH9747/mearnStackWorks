var num = 15;

if (num % 3 == 0) {
    console.log(`fizz`);
} else if (num % 5 == 0) {
    console.log(`buz`);
} else if (num % 15 == 0) {
    console.log(`fizbuzz`);
} else {
    console.log(`not divisible`);
}

// ternery operator

// num % 3 == 0 ? "fizz" : num % 5 == 0
