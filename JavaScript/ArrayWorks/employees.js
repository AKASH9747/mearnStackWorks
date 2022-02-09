var employees = [
    [1000, "ram", "developer", "kochi", 25000, 1],
    [1000, "ravi", "developer", "kochi", 35000, 2],
    [1000, "arjun", "qa", "tvm", 34000, 1],
    [1000, "tom", "qa", "tvm", 45000, 2],
    [1000, "jim", "ba", "banglore", 55000, 3],
    [1000, "tinu", "ba", "banglore", 35000, 2],
    [1000, "fred", "sales", "mumbai", 45000, 2],
    [1000, "abi", "sales", "mumbai", 65000, 5],
]
//total salary
var totalSalary = employees.map(emp => emp[4]).reduce((sal1, sal2) => sal1 + sal2);
console.log(totalSalary);

//min salary
console.log(employees.reduce((emp1, emp2) => emp1[4] < emp2[4] ? emp1[4] : emp2[4]));

//max salary
console.log(employees.map(emp => emp[4]).reduce((sal1, sal2) => sal1 > sal2 ? sal1 : sal2));




//q1
// var empNames = employees.map(emp => emp[1]);
// console.log(empNames);

//q3
// var developerDetails = employees.filter(emp => emp[2] == "developer")
// console.log(developerDetails);

//q4 print employee details whoes salary>30000
// var employeeDetails = employees.filter(emp => emp[4] > 30000)
// console.log(employeeDetails);

//q5 print details of employee arjun
// console.log(employees.find(emp => emp[1] == "arjun"));





//sort employee based on salary order in dec
// employees.sort((emp1, emp2) => emp2[4] - emp1[4]);
// console.log(employees);

//sort employees experience in asc
// employees.sort((emp1, emp2) => emp1[5] - emp2[5]);
// console.log(employees);


// q1 print all employees name only
// for (let employee of employees) {
//     console.log(employee[1]);
// }

//q2 print no of empoyyes in this company
// console.log(employees.length);

//q3 print developer details
// for (let employee of employees) {
//     if (employee[2] == `developer`) {
//         console.log(employee);
//     }
// }

//q4 print employee details whoes salary>30000
// for (let emp of employees) {
//     if (emp[4] > 30000) {
//         console.log(emp);
//     }
// }

//q5 print details of employee arjun
// for (let emp of employees) {
//     if (emp[1] == "arjun") {
//         console.log(emp);
//     }

// }