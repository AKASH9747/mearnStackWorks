var num = 2, lowerLimit = 8, upperLimit = 36, sum = 0, i = 1;

while (i <= upperLimit) {
    sum = i ** num;
    if (sum >= lowerLimit && sum <= upperLimit) {
        console.log(i);
    }
    i++;
}