const axios = require('axios');
const moment = require('moment-timezone');
const regionCode = require('./regionCode.json');

const url = process.env.K_MIDDLE_WEATHER_URL;
const apikey = process.env.K_WEATHER_API_KEY;

const checkLongWeather = async (location) => {
    console.log('2. 장기 예보');
    let nowDay = new Date();
    let times = {
        year: moment(nowDay.getTime()).tz('Asia/Seoul').format('YYYY'),
        month: moment(nowDay.getTime()).tz('Asia/Seoul').format('MM'),
        day: moment(nowDay.getTime()).tz('Asia/Seoul').format('DD'),
        hour: moment(nowDay.getTime()).tz('Asia/Seoul').format('HH'),
        minute: moment(nowDay.getTime()).tz('Asia/Seoul').format('mm')
    };
    let nowTime = Number(times.nowHour + times.nowMinute);

    let dataParams = {
        ServiceKey : apikey,
        pageNo : '1',
        numOfRows : '12',
        dataType : 'JSON',
        regId : '',
        tmFc : ''
    }

    if(nowTime >= 630 && nowTime < 1830){
        dataParams.tmFc = times.year + times.month + times.day + '0600';
    }else if(nowTime > 1830){
        dataParams.tmFc = times.year + times.month + times.day + '1800';
    }else{
        let yesterday = new Date(moment(nowDay).subtract(1, 'day'));
        let beforeYear = moment(yesterday.getTime()).tz('Asia/Seoul').format('YYYY');
        let beforeMonth = moment(yesterday.getTime()).tz('Asia/Seoul').format('MM');
        let beforeDay = moment(yesterday.getTime()).tz('Asia/Seoul').format('DD');
        dataParams.tmFc = beforeYear + beforeMonth + beforeDay + '1800';
    }
    regionCode.forEach(data => {
        if(data.si === location){
            dataParams.regId = data.code;
            return;
        }
    });

    let params = Object.keys(dataParams).map(key => key + '=' + dataParams[key]).join('&');

    try{
        const weatherData = await axios(`${url}?${params}`);
        let daysData = JSON.parse(weatherData.request._response).response.body.items.item[0];
        let result = [[], [], [], [], [], [], [], []];
        for(let i = 0; i <= 7; i++){
            result[i].push(daysData[`taMin${i+3}`]);
            result[i].push(daysData[`taMax${i+3}`]);
        }
        console.log('2. 장기 예보 데이터 조회 완료');
        return result;
    }catch(err){
        console.log('일간 예보 api 에러입니다.');
        console.log(err);
        return null;
    }
}

module.exports = checkLongWeather;