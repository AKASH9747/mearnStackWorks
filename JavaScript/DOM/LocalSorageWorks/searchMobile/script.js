function addMobile() {
    let name = mob_name.value
    let brand = mob_brand.value
    let display = mob_display
    let ram = mob_ram.value
    let processor = mob_pro.value
    let price = mob_price.value

    var mobile = {
        name,
        brand,
        display,
        ram,
        processor,
        price
    }

    if (name in localStorage) {
        alert("Already added this mobile to cart")
    } else {
        var m = localStorage.setItem(mobile.name, JSON.stringify(mobile))
        console.log(m);
    }
}

function findMobile() {
    let mobile = mb_name.value
    if (mobile in localStorage) {
        let mobile_name = JSON.parse(localStorage.getItem(mobile))
        console.log(mobile_name);
        let op_data = `<p> ${mobile_name.name}</p> 
        <p> ${mobile_name.brand}</p> `
        document.querySelector("#output").innerHTML = op_data
    } else {
        alert("There is no mobile existing with this name")
    }
}