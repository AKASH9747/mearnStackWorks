var student = {
    rol: 1000,
    st_name: "akash",
    course: "MEARN",
    total: 36000
}

// console.log(student.st_name);
// console.log(student.course);

// checking a property exist in object
// console.log("total" in student);

//adding a property and value
// student["gender"] = "male"
student.gender = "male"

student.isVaccinated = true

//vaccine:covishield
student.vaccine = "coviShield"
//updation
// student.vaccine = "coWaxine"
// student.total += 40000
// console.log(student);

//iteration
for (let key in student) {
    console.log(student[key]);
}

