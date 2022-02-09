class Bank {
    constructor(acno, pName, pan, branch, phone, balance) {
        this.accountNumber = acno
        this.personName = pName
        this.branch = branch
        this.phone = phone
        this.balance = balance
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`transcation failed insufficent balance on ur ${this.accountNumber} `);
        } else {
            this.balance -= amount;
            console.log(`your account ${this.accountNumber} has been debited with amount ${amount} your avilable balance is ${this.balance}`);
        }
    }
    deposit(amount) {
        this.balance += amount
        console.log(`your account ${this.accountNumber} has been credited with amount ${amount} your avilable balance is ${this.balance}`);
    }
    balanceEnquiry() {
        console.log(`your avilable balace is ${this.balance}`);
    }

}
var bank = new Bank(101, "akash", 1234, "balussery", 9747, 25000)
bank.withdraw(10000)