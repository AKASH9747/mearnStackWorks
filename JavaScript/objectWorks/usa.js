var usaData = [
    {
        "name": "United States of America",
        "topLevelDomain": [
            ".us"
        ],
        "alpha2Code": "US",
        "alpha3Code": "USA",
        "callingCodes": [
            "1"
        ],
        "capital": "Washington, D.C.",
        "altSpellings": [
            "US",
            "USA",
            "United States of America"
        ],
        "subregion": "Northern America",
        "region": "Americas",
        "population": 329484123,
        "latlng": [
            38,
            -97
        ],
        "demonym": "American",
        "area": 9629091,
        "gini": 41.4,
        "timezones": [
            "UTC-12:00",
            "UTC-11:00",
            "UTC-10:00",
            "UTC-09:00",
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC+10:00",
            "UTC+12:00"
        ],
        "borders": [
            "CAN",
            "MEX"
        ],
        "nativeName": "United States",
        "numericCode": "840",
        "flags": {
            "svg": "https://flagcdn.com/us.svg",
            "png": "https://flagcdn.com/w320/us.png"
        },
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Estados Unidos",
            "pt": "Estados Unidos",
            "nl": "Verenigde Staten",
            "hr": "Sjedinjene Američke Države",
            "fa": "ایالات متحده آمریکا",
            "de": "Vereinigte Staaten von Amerika",
            "es": "Estados Unidos",
            "fr": "États-Unis",
            "ja": "アメリカ合衆国",
            "it": "Stati Uniti D'America",
            "hu": "Amerikai Egyesült Államok"
        },
        "flag": "https://flagcdn.com/us.svg",
        "regionalBlocs": [
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        "cioc": "USA",
        "independent": true
    },
    {
        "name": "indiaData"
    }
]

//print country name
// var countryName = usaData[0].name
// var countryName = usaData.map(data => data.name)
// console.log(countryName);

//capital
var usaCapital = usaData[0].capital
// console.log(usaCapital);

//population
var usaPopulation = usaData[0].population
// console.log(usaPopulation);

//print boarder
var usaBoarder = usaData[0].borders
// console.log(usaBoarder);

//currency name & symbl
var usaCurrency = usaData[0].currencies[0].name
// console.log(usaCurrency);
var usaCurrencySymboal = usaData[0].currencies[0].symbol
// console.log(usaCurrencySymboal);

//languages name
var usaLanguage = usaData[0].languages
// console.log(usaLanguage);

//flag
var usaFlag = usaData[0].flag
console.log(usaFlag);