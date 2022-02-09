var indiaData = [
    {
        "name": "India",
        "topLevelDomain": [
            ".in"
        ],
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "callingCodes": [
            "91"
        ],
        "capital": "New Delhi",
        "altSpellings": [
            "IN",
            "Bhārat",
            "Republic of India",
            "Bharat Ganrajya"
        ],
        "subregion": "Southern Asia",
        "region": "Asia",
        "population": 1380004385,
        "latlng": [
            20,
            77
        ],
        "demonym": "Indian",
        "area": 3287590,
        "gini": 35.7,
        "timezones": [
            "UTC+05:30"
        ],
        "borders": [
            "AFG",
            "BGD",
            "BTN",
            "MMR",
            "CHN",
            "NPL",
            "PAK",
            "LKA"
        ],
        "nativeName": "भारत",
        "numericCode": "356",
        "flags": {
            "svg": "https://flagcdn.com/in.svg",
            "png": "https://flagcdn.com/w320/in.png"
        },
        "currencies": [
            {
                "code": "INR",
                "name": "Indian rupee",
                "symbol": "₹"
            }
        ],
        "languages": [
            {
                "iso639_1": "hi",
                "iso639_2": "hin",
                "name": "Hindi",
                "nativeName": "हिन्दी"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Índia",
            "pt": "Índia",
            "nl": "India",
            "hr": "Indija",
            "fa": "هند",
            "de": "Indien",
            "es": "India",
            "fr": "Inde",
            "ja": "インド",
            "it": "India",
            "hu": "India"
        },
        "flag": "https://flagcdn.com/in.svg",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "IND",
        "independent": true
    }
]
//print country name
let countryName = indiaData[0].name
// console.log(countryName);

//capital
let capital = indiaData[0].capital
// console.log(capital);

//population
let population = indiaData[0].population
// console.log(population);

//print boarder
let border = indiaData[0].borders
// let border = [...indiaData[0].borders]
console.log(border);

//currency name & symbl
let currencyName = indiaData[0].currencies[0].name
// console.log(currencyName);

let symboal = indiaData[0].currencies[0].symbol
// console.log(symboal);

//languages name
let languagesName = indiaData[0].languages
// console.log(languagesName);

//flag
let flag = indiaData[0].flag
// console.log(flag);

// var country = { countryName, capital, population, boarder, currencyName, symboal, languagesName, flag }
// console.log(country);