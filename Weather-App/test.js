const moment = require('moment-timezone');

const d = [
    ["1500", "23", "-0.7", "2", "158", "2.2", "4", "0", "30", "0", "강수없음", "65", "적설없음"], 
    ["1600", "23", "-0.3", "1.4", "164", "1.5", "4", "0", "30", "0", "강수없음", "65", "적설없음"], 
    ["1700", "22", "-0.5", "0.3", "117", "0.7", "4", "0", "30", "0", "강수없음", "65", "적설없음"], 
    ["1800", "22", "-0.8", "0.6", "124", "1.1", "4", "0", "30", "0", "강수없음", "70", "적설없음"], 
    ["1900", "21", "-0.8", "-0.1", "84", "0.9", "4", "0", "30", "0", "강수없음", "75", "적설없음"], 
    ["2000", "21", "-1.3", "-0.3", "78", "1.4", "4", "0", "30", "0", "강수없음", "75", "적설없음"], 
    ["2100", "21", "-1.2", "-0.7", "62", "1.5", "4", "0", "30", "0", "강수없음", "75", "적설없음"], 
    ["2200", "20", "-0.9", "-0.6", "59", "1.2", "4", "0", "30", "0", "강수없음", "80", "적설없음"], 
    ["2300", "20", "-0.8", "-0.6", "56", "1.1", "4", "0", "30", "0", "강수없음", "80", "적설없음"], 
    ["0000", "20", "-0.7", "-1.2", "34", "1.4", "4", "0", "30", "0", "강수없음", "75", "적설없음"]
];

let nowTime = new Date();
let times = {
    year: moment(nowTime.getTime()).tz('Asia/Seoul').format('YYYY'),
    month: moment(nowTime.getTime()).tz('Asia/Seoul').format('MM'),
    day: moment(nowTime.getTime()).tz('Asia/Seoul').format('DD'),
    hour: moment(nowTime.getTime()).tz('Asia/Seoul').format('HH'),
    minute: moment(nowTime.getTime()).tz('Asia/Seoul').format('mm')
};
let dayNum = Number(times.year + times.month + times.day + times.hour + "00");
console.log('dayNum : ', dayNum, ' / type : ', typeof(dayNum));
d.filter(data => Number(data[0]) >= dayNum);
// d.map(data => {
//     console.log('data[0] : ', Number(data[0]), ' / type : ', typeof(Number(data[0])));
//     {
//         Number(data[0]) <= dayNum ?
//         console.log('이미 지나간 시간') :
//         console.log('아직 지나지 않은 시간')
//     }
// })
console.log(d);