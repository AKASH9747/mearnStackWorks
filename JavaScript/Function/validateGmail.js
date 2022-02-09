

// function validateGmail(email) {
//     return email.endsWith("@gmail.com") ? "true" : "false";
// }


// Arrow Function


var validateGmail = email => email.endsWith("@gmail.com" ? true : false);
console.log(validateGmail("psakashgmail.com"));
