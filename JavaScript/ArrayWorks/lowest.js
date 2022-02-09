
var expenses = [1000, 2000, 3000, 4000, 5000, 6000, 650, 7000];
var lowest = expenses[0];
for (let amount of expenses) {
    if (amount < lowest) {
        lowest = amount;
    }
}
console.log(lowest);
