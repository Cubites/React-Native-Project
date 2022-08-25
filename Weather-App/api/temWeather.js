const axios = require('axios');
const moment = require('moment-timezone');
const regionCode = require('./regionCode.json');

const url = process.env.K_MIDDLE_WEATHER_URL;
const apikey = process.env.K_WEATHER_API_KEY;

const middleForeCast = async (location) => {
    let nowDay = new Date();
    let times = {
        year: moment(nowDay.getTime()).tz('Asia/Seoul').format('YYYY'),
        month: moment(nowDay.getTime()).tz('Asia/Seoul').format('MM'),
        day: moment(nowDay.getTime()).tz('Asia/Seoul').format('DD'),
        hour: moment(nowDay.getTime()).tz('Asia/Seoul').format('HH'),
        minute: moment(nowDay.getTime()).tz('Asia/Seoul').format('mm')
    };
    let nowTime = Number(times.nowHour + times.nowMinute);
    console.log('nowDay : ', nowDay, '/ type : ', typeof(nowDay));

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
        console.log('yesterday : ', yesterday, '/ type : ', typeof(yesterday));
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
    console.log('params : ', dataParams);

    let params = Object.keys(dataParams).map(key => key + '=' + dataParams[key]).join('&');

    const weatherData = await axios(`${url}?${params}`);
    let data = weatherData.response.items.item;
    Object.keys(data).map(key => console.log(key + ':' + data[key]));
}

module.exports = middleForeCast;