var account_details = {
    1000: { account_number: 1000, balance: 3000, password: "userone", transactions: [] },
    1001: { account_number: 1001, balance: 2000, password: "usertwo", transactions: [] },
    1002: { account_number: 1002, balance: 4000, password: "userthree", transactions: [] },
    1003: { account_number: 1003, balance: 5000, password: "userfour", transactions: [] }
}
// q1 create a function validateAccountNumber(acno) if acno exist return true else return false
function validateAccountNumber(acno) {
    return acno in account_details ? true : false
}
console.log(validateAccountNumber(10010));

// q2 create a function authenticate (acno,password) if given credential are correct
// return access granted else return permission denied

function authenticate(acno, password) {
    if (validateAccountNumber(acno)) {
        let psw = account_details[acno].password
        if (psw == password) {
            return "login success"
        } else {
            return "Invalid password"
        }
    } else {
        return "invalid account number"
    }
}
console.log(authenticate(1001, "usertwo"));
// console.log(account_details);

