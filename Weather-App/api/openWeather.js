const axios = require('axios');

const checkWeather = (lat, lon, city, callback) => {
    const url = process.env.OPEN_WEATHER_URL;
    const apikey = process.env.OPEN_WEATHER_API_KEY;
    if(city == ''){
        data = {
            lat: lat,
            lon: lon,
            appid: apikey,
            units: 'metric',
            lang: 'kr'
        };
    }else{
        data = {
            q: city,
            appid: apikey,
            units: 'metric',
            lang: 'kr'
        };
    }
    let params = Object.keys(data).map(key => key + '=' + data[key]).join('&');
    axios(`${url}?${params}`)
        .then(data => console.log(data))
        .catch(err => {
            console.log('---- 요청 에러 ----');
            console.log(err);
        });
    return data;
}

module.exports = checkWeather;