class Bank {
    account_details = {
        1000: { account_number: 1000, balance: 3000, password: "userone", transactions: [] },
        1001: { account_number: 1001, balance: 2000, password: "usertwo", transactions: [] },
        1002: { account_number: 1002, balance: 4000, password: "userthree", transactions: [] },
        1003: { account_number: 1003, balance: 5000, password: "userfour", transactions: [] }
    }
    validate(acno) {
        return acno in this.account_details ? true : false
    }
    authenticate(acno, password) {
        if (this.validate(acno)) {
            let psw = this.account_details[acno].password
            if (psw == password) {
                return "login success"
            } else {
                return "Invalid password"
            }
        } else {
            return "invalid account number"
        }
    }
    getBalance(acno) {
        if (this.validate(acno)) {
            return this.account_details[acno].balance
        } else {
            return "Invalid account number"
        }
    }
    fundTransfer(fromAcno, toAcno, amount) {
        if (this.validate(fromAcno) && this.validate(toAcno)) {
            //checking fronAcno avilable balance
            let avlBalance = this.getBalance(fromAcno)
            if (amount > avlBalance) {
                return "Transcation failed insufficent balancce"
            } else {
                this.account_details[fromAcno].balance -= amount
                this.account_details[toAcno].balance += amount
            }
        } else {
            return "Invalid creditensionls"
        }
    }
    knowTranscstions(acno) {
        if (this.validateAccountNumber(acno)) {
            return this.account_details[acno].transactions
        } else {
            return `Invalid account number`
        }
    }

}
var obj = new Bank()
// console.log(obj.validate(1000));
// console.log(obj.authenticate(1001, "usertwo"));
// console.log(obj.getBalance(10000));
console.log(obj.fundTransfer(1000, 1001, 1500));
console.log(obj.getBalance(1001));
// console.log(obj.knowTranscstions(1001));