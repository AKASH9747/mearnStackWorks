var luckyContext = new Promise((result, reject) => {
    let lotteryNumber = 2
    let priceNumber = Math.floor(Math.random() * 10)
    if (priceNumber == lotteryNumber) {
        result("you have won the prize money")
    }
})
luckyContext.then(data => console.log("Iam going to buy a Lamborgini"))

// catch u=is using for rejection