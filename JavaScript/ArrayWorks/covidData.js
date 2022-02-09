var coivd_data = [
    [1, "trivandrum", 40000, 200, 38000, 8, 5],
    [2, "kollam", 35000, 250, 33000, 7, 3],
    [3, "kottayam", 50000, 500, 45000, 5, 2],
    [4, "alapuzha", 25000, 150, 24000, 9, 5],
    [5, "ernamkulam", 70000, 500, 65000, 9, 5],
    [6, "thrissur", 65000, 550, 60000, 8, 7],
    [7, "iduky", 1000, 50, 9500, 9, 6]
]
//print all +ve case with district
// var totalPositiveCase = coivd_data.map(data => [data[1], data[2]]);
// console.log(totalPositiveCase);

// q1 higest test + ve case district
// var redCategory = coivd_data.reduce((data1, data2) => data1[2] > data2[2] ? data1 : data2)
// console.log(redCategory);

// q2 district with higest 1 dose vaccination rate
var greenCity = coivd_data.reduce((d1, d2) => d1[5] > d2[5] ? d1 : d2)
var greenDistrict = coivd_data.filter(d => d[5] == greenCity[5])
console.log(greenDistrict);

// q1 higest test + ve case district
// var heighest = 0;
// var district;
// for (let data of coivd_data) {
//     if (data[2] > heighest) {
//         heighest = data[2];
//         district = data[1];
//     }
// }
// console.log(`higest test + ve case district is ${district} it has ${heighest} +ve cases`);

// q2 district with higest 1 dose vaccination rate
// var heighest = 0;
// var district;
// for (let data of coivd_data) {
//     if (data[5] > heighest) {
//         heighest = data[5];
//         district = data[1];
//     }
// }
// console.log(`district with higest 1 dose vaccination rate is ${district} it has rate ${heighest}`);

// q3 district with lowest death cases
// var district;
// for (let data of coivd_data) {
//     var lowest_death = data[3];
//     if (data[3] < lowest_death) {
//         district = data[1];
//     }
// }
// console.log(`district with lowest death case is ${district}`);

//q4 sort district with +ve cases
// coivd_data.sort((data1, data2) => data2[2] - data1[2]);
// console.log(coivd_data);

// q5 sort the districts based on 1st dose
