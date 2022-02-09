//spread function

function add(...arg) {
    return arg.reduce((n1, n2) => n1 + n2)
}
console.log(add(10, 20));

//maximun

function findMax(...arg) {
    return arg.reduce((n1, n2) => n1 > n2 ? n1 : n2)
}
console.log(findMax(10, 20, 50, 60, 70));