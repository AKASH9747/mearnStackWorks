function addAccount() {
    let accountNumber = ac_number.value
    let phoneNumber = ph_number.value
    let accountType = ac_type.value
    let mail = email.value
    let password = pswd.value
    let balance = 2000

    let account = {
        accountNumber,
        phoneNumber,
        accountType,
        mail,
        password
    }

    if (accountNumber in localStorage) {
        alert("This account is already present!!")
    } else {
        localStorage.setItem(account.accountNumber, JSON.stringify(account))
    }
    window.location.href = "login.html"
}

function login() {
    let accNumber = acc_number.value
    let password = acc_password.value
    if (accNumber in localStorage) {
        let details = JSON.parse(localStorage.getItem(accNumber))
        if (password == details.password) {
            window.location.href = "content.html"
        } else {
            alert("Invalid password")
        }
    } else {
        alert("Invalid account Number")
    }
}
