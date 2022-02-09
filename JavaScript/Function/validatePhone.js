
function ValidatePhoneNumber(phoneNumber) {
    return (phoneNumber.length) < 10 ? "false" : "true";
}
console.log(ValidatePhoneNumber("1234567891"));

// Arrow Function

var ValidatePhoneNumber = pNumber => pNumber.length == 10 ? true : false;
console.log(ValidatePhoneNumber("1234567891"));