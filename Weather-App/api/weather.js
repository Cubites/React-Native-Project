const axios = require('axios');
const moment = require('moment-timezone');
const xy = require('./ax.json');

const checkWeather = async (location) => {
    // 날짜 확인
    let nowTime = new Date();
    let seoul = moment(nowTime.getTime()).tz('Asia/Seoul').format('HH');
    let times = {
        year: moment(nowTime.getTime()).tz('Asia/Seoul').format('YYYY'),
        month: moment(nowTime.getTime()).tz('Asia/Seoul').format('MM'),
        day: moment(nowTime.getTime()).tz('Asia/Seoul').format('DD'),
        hour: moment(nowTime.getTime()).tz('Asia/Seoul').format('HH'),
        minute: moment(nowTime.getTime()).tz('Asia/Seoul').format('mm')
    };
    console.log(times);
    
    const url = process.env.K_WEATHER_URL;
    const apikey = process.env.K_WEATHER_API_KEY;

    // 검색 지역 x, y 좌표값 찾기
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
    };

    let apiTime = '';
    let timesHourMinute = times.hour + times.minute;
    if(Number(timesHourMinute) < 220){
        apiTime = '2300';
    }else if(Number(timesHourMinute) < 520){
        apiTime = '0200';
    }else if(Number(timesHourMinute) < 820){
        apiTime = '0500';
    }else if(Number(timesHourMinute) < 1120){
        apiTime = '0800';
    }else if(Number(timesHourMinute) < 1420){
        apiTime = '1100';
    }else if(Number(timesHourMinute) < 1720){
        apiTime = '1400';
    }else if(Number(timesHourMinute) < 2020){
        apiTime = '1700';
    }else if(Number(timesHourMinute) < 2320){
        apiTime = '2000';
    }

    let dataParams = {
        ServiceKey: apikey,
        pageNo: '1',
        numOfRows: '12',
        dataType: 'JSON',
        base_date: apiTime !== '2300' ? times.year + times.month + times.day : ,
        base_time: apiTime,
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