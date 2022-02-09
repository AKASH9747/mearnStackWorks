

function isStartWithA(name) {
    return name[0] == "A" || name[0] == "a" ? "true" : "false";
}

console.log(isStartWithA("bkash"));

// Arrow FUNCTION


var isStartWithA = name => name[0] == `a` ? true : false;
console.log(isStartWithA("bkash"));