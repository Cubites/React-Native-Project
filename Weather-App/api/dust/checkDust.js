const axios = require('axios');
const moment = require('moment-timezone');

const checkDust = async () => {
    console.log('3. 미세먼지 예보');

    let dataParams = {
        ServiceKey : process.env.ServiceKey,
        pageNo : '1',
        numOfRows : '12',
        dataType : 'JSON',
        regId : '',
        tmFc : ''
    }
}