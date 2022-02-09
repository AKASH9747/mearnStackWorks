var products = [
    [100, "oreo", 40, 50],
    [101, "goodday", 30, 50],
    [102, "hidendseek", 50, 0],
    [103, "moms's", 20, 10],
    [104, "treat", 70, 5],
    [105, "oreo", 50, 80],
    [106, "chocko", 100, 0],
    [107, "kinder", 100, 0]

]
//(forEach)
products.forEach(p => console.log(p))

//print all product avilable in range(10-20)
// var range = products.filter(p => p[2] >= 10 && p[2] <= 20)
// console.log(range);

//is there any product avilable in range(10-20)
// var isavilable = products.some(p => p[2] >= 10 && p[2] <= 20)
// console.log(isavilable);

//is there any prodouct with avilable stock product > 100
// var isavilable = products.some(prod => prod[3] > 100)
// console.log(isavilable);

// print costly product detail reduce
// var costlyProduct = products.reduce((prod1, prod2) => prod1[2] > prod2[2] ? prod1 : prod2)
// var heighestCostProd = products.filter(prod => prod[2] == costlyProduct[2])
// console.log(heighestCostProd);

// print outofstock products filter
// var outOfStockProd = products.filter(prod1 => prod1[3] == 0)
// console.log(outOfStockProd);

// print oreo details find
// var productOreo = products.find(prod => prod[1] == `oreo`)
// console.log(productOreo);

// sort products based on available stock order by desc sort
// var avilableProd = products.sort((prod1, prod2) => prod2[3] - prod1[3])
// console.log(avilableProd);

// print product details having maximum available stock reduce
// console.log(products.reduce((prod1, prod2) => prod1[3] > prod2[3] ? prod1 : prod2));