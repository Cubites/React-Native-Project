{
    "config": {
        "adapter": [Function xhrAdapter], 
        "data": undefined, 
        "env": {
            "FormData": null
        }, 
        "headers": {
            "Accept": "application/json, text/plain, */*"
        }, 
        "maxBodyLength": -1, 
        "maxContentLength": -1, 
        "method": "get", 
        "timeout": 0, 
        "transformRequest": [[Function transformRequest]], 
        "transformResponse": [[Function transformResponse]], 
        "transitional": {
            "clarifyTimeoutError": false, 
            "forcedJSONParsing": true, 
            "silentJSONParsing": true
        }, 
        "url": "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=HOPmDf0UcneN6rBjOAXWpL5GJIrlO7jn4%2F4c6Fyv9staV5t3o9o4X5OG3dvAJtf%2BGc90F80UH9nouhfB3Oiaug%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&base_date=20220822&base_time=0500&nx=57&ny=128", 
        "validateStatus": [Function validateStatus], 
        "xsrfCookieName": "XSRF-TOKEN", 
        "xsrfHeaderName": "X-XSRF-TOKEN"
    }, 
    "data": {
        "response": {
            "body": [Object], 
            "header": [Object]
        }
    }, 
    "headers": {
        "access-control-allow-origin": "*", 
        "content-language": "ko-KR", 
        "content-type": "application/json;charset=UTF-8", 
        "date": "Mon, 22 Aug 2022 06:42:43 GMT", 
        "server": "NIA API Server", 
        "set-cookie": ["JSESSIONID=b1ONcygbg1Q3SUBtnapWuqAoMtkioznyEe7dD43P14Ah99fPboP6lvrY5oTK08VG.amV1c19kb21haW4vbmV3c2t5Mw==; Path=/1360000/VilageFcstInfoService_2.0; HttpOnly; Domain=apis.data.go.kr"]}, 
        "request": {
            "DONE": 4, 
            "HEADERS_RECEIVED": 2, 
            "LOADING": 3, 
            "OPENED": 1, 
            "UNSENT": 0, 
            "_aborted": false, 
            "_cachedResponse": undefined, 
            "_hasError": false, 
            "_headers": {
                "accept": "application/json, text/plain, */*"
            }, 
            "_incrementalEvents": false, 
            "_lowerCaseResponseHeaders": {
                "access-control-allow-origin": "*", 
                "content-language": "ko-KR", 
                "content-type": "application/json;charset=UTF-8", 
                "date": "Mon, 22 Aug 2022 06:42:43 GMT", 
                "server": "NIA API Server", 
                "set-cookie": "JSESSIONID=b1ONcygbg1Q3SUBtnapWuqAoMtkioznyEe7dD43P14Ah99fPboP6lvrY5oTK08VG.amV1c19kb21haW4vbmV3c2t5Mw==; Path=/1360000/VilageFcstInfoService_2.0; HttpOnly; Domain=apis.data.go.kr"
            }, 
            "_method": "GET", 
            "_perfKey": "network_XMLHttpRequest_http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=HOPmDf0UcneN6rBjOAXWpL5GJIrlO7jn4%2F4c6Fyv9staV5t3o9o4X5OG3dvAJtf%2BGc90F80UH9nouhfB3Oiaug%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&base_date=20220822&base_time=0500&nx=57&ny=128", 
            "_performanceLogger": {
                "_closed": false, 
                "_extras": [Object], 
                "_pointExtras": [Object], 
                "_points": [Object], 
                "_timespans": [Object]
            }, 
            "_requestId": null, 
            "_response": "{
                \"response\":{
                    \"header\":{
                        \"resultCode\":\"00\",
                        \"resultMsg\":\"NORMAL_SERVICE\"
                    },
                    \"body\":{
                        \"dataType\":\"JSON\",
                        \"items\":{
                            \"item\":[
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"TMP\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"24\",\"nx\":57,\"ny\":128},
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"UUU\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"-0.9\",\"nx\":57,\"ny\":128},
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"VVV\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"0.8\",\"nx\":57,\"ny\":128},
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"VEC\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"129\",\"nx\":57,\"ny\":128},
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"WSD\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"1.3\",\"nx\":57,\"ny\":128},
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"SKY\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"3\",\"nx\":57,\"ny\":128},
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"PTY\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"0\",\"nx\":57,\"ny\":128},
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"POP\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"20\",\"nx\":57,\"ny\":128},
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"WAV\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"0\",\"nx\":57,\"ny\":128},
                                {\"baseDate\":\"20220822\",\"baseTime\":\"0500\",\"category\":\"PCP\",\"fcstDate\":\"20220822\",\"fcstTime\":\"0600\",\"fcstValue\":\"강수없음\",\"nx\":57,\"ny\":128}
                            ]
                        },
                        \"pageNo\":1,
                        \"numOfRows\":10,
                        \"totalCount\":809
                    }
                }
            }", 
            "_responseType": "", 
            "_sent": true, 
            "_subscriptions": [], 
            "_timedOut": false, 
            "_trackingName": "unknown", 
            "_url": "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=HOPmDf0UcneN6rBjOAXWpL5GJIrlO7jn4%2F4c6Fyv9staV5t3o9o4X5OG3dvAJtf%2BGc90F80UH9nouhfB3Oiaug%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&base_date=20220822&base_time=0500&nx=57&ny=128", 
            "readyState": 4, 
            "responseHeaders": {
                "Access-Control-Allow-Origin": "*", 
                "Content-Language": "ko-KR", 
                "Content-Type": "application/json;charset=UTF-8", 
                "Date": "Mon, 22 Aug 2022 06:42:43 GMT",
                "Server": "NIA API Server", 
                "Set-Cookie": "JSESSIONID=b1ONcygbg1Q3SUBtnapWuqAoMtkioznyEe7dD43P14Ah99fPboP6lvrY5oTK08VG.amV1c19kb21haW4vbmV3c2t5Mw==; Path=/1360000/VilageFcstInfoService_2.0; HttpOnly; Domain=apis.data.go.kr"
            }, 
            "responseURL": "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=HOPmDf0UcneN6rBjOAXWpL5GJIrlO7jn4%2F4c6Fyv9staV5t3o9o4X5OG3dvAJtf%2BGc90F80UH9nouhfB3Oiaug%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&base_date=20220822&base_time=0500&nx=57&ny=128", 
            "status": 200, 
            "timeout": 0, 
            "upload": {}, 
            "withCredentials": true
    }, 
    "status": 200, 
    "statusText": undefined
}