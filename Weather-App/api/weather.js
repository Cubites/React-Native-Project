const axios = require('axios');
const xy = require('./ax.json');

const fig = {
    TMP: "1시간 기온",
    UUU: "풍속(동서성분)",
    VVV: "풍속(남북성분)",
    VEC: "풍향",
    WSD: "풍속",
    SKY: "하늘상태",
    PTY: "강수형태",
    POP: "강수확률",
    WAV: "파고",
    PCP: "1시간 강수량",
    REH: "습도",
    SNO: "1시간 신적설"
};
const unit = {
    TMP: "도",
    UUU: "m/s",
    VVV: "m/s",
    VEC: "deg",
    WSD: "m/s",
    SKY: "",
    PTY: "",
    POP: "%",
    WAV: "M",
    PCP: "mm",
    REH: "%",
    SNO: "cm"
}

const checkWeather =  (location) => {
    let nowTime = new Date();
    let nowHour = nowTime.getHours();
    
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

    axios(`${url}?${params}`)
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