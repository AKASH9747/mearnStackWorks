

var expenses = [1000, 2000, 3000, 4000, 88000, 5000, 6000, 7000];
var heighest = 0;
for (let amount of expenses) {
    if (amount > heighest) {
        heighest = amount
    }
}
console.log(heighest);
