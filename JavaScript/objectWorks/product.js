products = [
  {
    pid: 100,
    p_name: "samsungA52",
    band: "5g",
    price: 30000,
    display: "amoled",
  },
  {
    pid: 101,
    p_name: "samsungf41",
    band: "4g",
    price: 15000,
    display: "amoled",
  },
  {
    pid: 102,
    p_name: "mi10promax",
    band: "4g",
    price: 19000,
    display: "amoled",
  },
  { pid: 103, p_name: "mi11lite", band: "5g", price: 22000, display: "led" },
  {
    pid: 104,
    p_name: "iphone12pro",
    band: "5g",
    price: 80000,
    display: "amoled",
  },
  {
    pid: 105, p_name: "realme",
    band: "4g",
    price: 12000,
    display: "led"
  },
];


// # print product names only
// products.map(records=>records["p_name"]).forEach(records=>console.log(records))
// products.forEach(record => console.log(record[p_name]))

// # print all mobile details whose display="amoled"
// products.filter(records=>records["display"]=="amoled").forEach(records=>console.log(records))

// # print 5g moboile names
// products.filter(records=>records["band"]=="5g").forEach(records=>console.log(records["p_name"]))

// # filter mobiles based on price
// products.sort((rcd1,rcd2)=>rcd1["price"]-rcd2["price"]).forEach(result=>console.log(result))

// # print costly mobile
var costlyMobile = products.reduce((rcd1, rcd2) => rcd1["price"] > rcd2["price"] ? rcd1 : rcd2)
console.log(costlyMobile["price"]);

// # print low cost mobile
// var lowcostMobile = products.reduce((rcd1, rcd2) => rcd1["price"] < rcd2["price"] ? rcd1 : rcd2)
// console.log(lowcostMobile["p_name"]);