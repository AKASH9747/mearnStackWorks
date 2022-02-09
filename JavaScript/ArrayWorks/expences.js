

var expenses = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
console.log(expenses.length); //.length is a properity to know the total length of object
var total = 0;
for (let amount of expenses) {
    console.log(amount);
    total += amount;
}
console.log(total); //total expences