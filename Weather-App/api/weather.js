const axios = require('axios');
const xy = require('./ax.json');

const checkWeather = async (location) => {
    let nowTime = new Date();
    nowTime += (nowTime.getTimezoneOffset() * 60 * 1000)
    let nowHour = nowTime.getHours();
    console.log(nowTime.getTimezoneOffset());
    
    const url = process.env.K_WEATHER_URL;
    const apikey = process.env.K_WEATHER_API_KEY;

    let searchArea = '';
    xy.forEach((data, index) => {
        if(data.dong === location){
            searchArea = xy[index];
            return;
        }
    });
    if(searchArea == ''){
        xy.forEach((data, index) => {
            if(data.gu === location){
                searchArea = xy[index];
                return;
            }
        });
    };
    if(searchArea == ''){
        xy.forEach((data, index) => {
            if(data.si === location){
                searchArea = xy[index];
                return;
            }
        });
    }

    let dataParams = {
        ServiceKey: apikey,
        pageNo: '1',
        numOfRows: '12',
        dataType: 'JSON',
        base_date: '20220822',
        base_time: '0500',
        nx: searchArea.x,
        ny: searchArea.y
    }

    let params = Object.keys(dataParams).map(key => key + '=' + dataParams[key]).join('&');
    let result;

    await axios(`${url}?${params}`)
        .then(data => {
            console.log(data.status);
            let weatherData = data.data.response.body.items.item;
            weatherData.forEach(d => console.log(d.category, ' : ', d.fcstValue));
            result = weatherData;
        })
        .catch(err => console.log(err));
    
    return result;
}

module.exports = checkWeather;