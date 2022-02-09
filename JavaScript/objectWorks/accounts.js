var accounts = [
    {
        acno: 1000, ac_type: "savings", balance: 5000, transactions: [
            { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
            { to: 1002, amount: 600, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
        ]
    },
    {
        acno: 1001, ac_type: "savings", balance: 6000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
    {
        acno: 1002, ac_type: "current", balance: 8000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1001, amount: 5000, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
    {
        acno: 1003, ac_type: "current", balance: 16000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },
            { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },

]

//  q1  total number accounts
// console.log(accounts.length);

//q2  print all account numbers whose ac-type savings
// accounts.filter(rcd => rcd["ac_type"] == "savings").forEach(rcd => console.log(rcd["acno"]))

//q3 print balance of acno=1000
// var balance = accounts.find(data => data.acno == 1000).balance
// console.log(balance);

//q4 print all phone-pay transaction details
// var phonePayT = accounts.map(data => data.transactions).flat().filter(tra => tra.method == "phone-pay")
// console.log(phonePayT);

//print all transcation whose transcation amount > 500
// var tranAmountG500 = accounts.map(data => data.transactions).flat().filter(t => t.amount > 500)
// console.log(tranAmountG500);

//q5 print highest balance account details
// var heighestBal = accounts.reduce((d1, d2) => d1["balance"] > d2["balance"] ? d1 : d2)
// console.log(heighestBal);

//q4 print credit transcation's of 1002
var creditTranscation = accounts.map(data => data.transactions).flat().filter(t => t.to = 1002)
console.log(creditTranscation);

//debit transcation of 1002
var debitTranscation = accounts.find(data => data.acno == 1002).transactions
console.log(debitTranscation);

//q6 print transaction history of 1002
// transcationHistory = { debitTr: debitTranscation, creditTran: creditTranscation }
// console.log(transcationHistory);
var transHistory = [...creditTranscation, ...debitTranscation]
console.log(transHistory);

