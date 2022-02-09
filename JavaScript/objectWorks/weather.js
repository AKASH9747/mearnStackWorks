var data = [
    { districtname: "thrissur", weather: 29 },
    { districtname: "ekm", weather: 32 },
    { districtname: "ktm", weather: 29 },
    { districtname: "idk", weather: 18 },
    { districtname: "thrissur", weather: 32 },
    { districtname: "ekm", weather: 30 },
    { districtname: "ktm", weather: 30 },
    { districtname: "idk", weather: 45 },


]
//order of heighest weather

var weatherOutput = {}

for (let record of data) {
    let districtname = record["districtname"]
    let currentTemp = record["weather"]
    if (districtname in weatherOutput) {
        let oldTemp = weatherOutput[districtname]
        if (currentTemp > oldTemp) {
            weatherOutput[districtname] = currentTemp
        }

    } else {
        weatherOutput[districtname] = currentTemp //t=29
    }
}
console.log(weatherOutput);

//heighest temp district

console.log(Object.entries(weatherOutput).sort((r1, r2) => r2[1] - r1[1]));
