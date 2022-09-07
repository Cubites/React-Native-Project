const axios = require('axios');
const moment = require('moment-timezone');
const xy = require('./axialValue.json');

const checkShortWeather = async (location) => {
    console.log('1. 단기 예보');
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
    
    // 날짜 확인
    let nowTime = new Date();
    let times = {
        year: moment(nowTime.getTime()).tz('Asia/Seoul').format('YYYY'),
        month: moment(nowTime.getTime()).tz('Asia/Seoul').format('MM'),
        day: moment(nowTime.getTime()).tz('Asia/Seoul').format('DD'),
        hour: moment(nowTime.getTime()).tz('Asia/Seoul').format('HH'),
        minute: moment(nowTime.getTime()).tz('Asia/Seoul').format('mm')
    };

    // 요청할 날씨예보 데이터 시간대 지정
    let apiTime = '';
    let timesHourMinute = times.hour + times.minute;
    if(Number(timesHourMinute) < 220){
        let yesterday = new Date(moment(nowTime).subtract(1, 'day'));
        times.year = moment(yesterday.getTime()).tz('Asia/Seoul').format('YYYY');
        times.month = moment(yesterday.getTime()).tz('Asia/Seoul').format('MM');
        times.day = moment(yesterday.getTime()).tz('Asia/Seoul').format('DD');
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
        numOfRows: '120',
        dataType: 'JSON',
        base_date: times.year + times.month + times.day,
        base_time: apiTime,
        nx: searchArea.x,
        ny: searchArea.y
    }

    let params = Object.keys(dataParams).map(key => key + '=' + dataParams[key]).join('&');
    
    try{
        let apiData = await axios(`${url}?${params}`);
        let weatherData = apiData.data.response.body.items.item;
        console.log('weatherDetail : ', weatherData);

        let weatherDetail = [[], [], [], [], [], [], [], [], [], []];
        // baseTime : 예보 시간
        // TMP : 기온 , SKY : 하늘상태 , PCP : 강수확률 , REH : 습도 , SNO : 적설량
        let useValues = ["TMP", "UUU", "VVV", "VEC", "WSD", "SKY", "PTY", "POP", "WAV", "PCP", "REH", "SNO"];
        let dayIndex = -1;
        weatherData.forEach((d) => {
            if(d.category === 'TMP'){
                dayIndex += 1;
                weatherDetail[dayIndex].push(d.fcstTime);
                weatherDetail[dayIndex].push(d.fcstValue);
                console.log('dayIndex :', dayIndex);
                console.log(weatherDetail[dayIndex]);
            }else if(useValues.includes(d.category)){
                weatherDetail[dayIndex].push(d.fcstValue);
            }
        });
        console.log('Number(weatherDetail[0][0]) : ', Number(weatherDetail[0][0]));
        console.log(`Number(times.hour + '00') : `, Number(times.hour + '00'));
        for(let i; i < weatherDetail.length; i++){
            if(Number(weatherDetail[0][0]) < Number(times.hour + '00')){
                weatherDetail.shift();
                // console.log(weatherDetail);
            }else{
                break;
            }
        }
        console.log('1. 단기 예보 데이터 조회 완료');
        console.log('weatherDetail : ', weatherDetail);
        return weatherDetail;
    }catch(e){
        console.log('api 에러 : ', e);
        return null;
    }
}

module.exports = checkShortWeather;