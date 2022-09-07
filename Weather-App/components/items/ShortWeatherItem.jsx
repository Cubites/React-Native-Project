import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/*  
  0. 시간
  1. "TMP": "1시간 기온",
  2. "UUU": "풍속(동서성분)",
  3. "VVV": "풍속(남북성분)",
  4. "VEC": "풍향",
  5. "WSD": "풍속",
  6. "SKY": "하늘상태",
  7. "PTY": "강수형태",
  8. "POP": "강수확률",
  9. "WAV": "파고",
  10. "PCP": "1시간 강수량",
  11. "REH": "습도",
  12. "SNO": "1시간 신적설"
*/

const ShortWeatherItem = ({ data }) => {
  let weatherImage = '';
  switch(data[7]){
    case '0':
      weatherImage = require('../../assets/icon/sunny.png');
      break;
    case '1':
      weatherImage = require('../../assets/icon/rain.png');
      break;
    case '2':
      weatherImage = require('../../assets/icon/sleet.png');
      break;
    case '3':
      weatherImage = require('../../assets/icon/snow.png');
      break;
    case '4':
      weatherImage = require('../../assets/icon/sunny-rain.png');
      break;
    default:
      weatherImage = require('../../assets/icon/error.png');
      break;
  }
  return (
    <View style={styles.container}>
      <View>
      <Text>{data[0].slice(0,2) + ' 시'}</Text>
      </View>
      <View>
        <Image style={styles.icon} source={weatherImage} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>{data[1] + " 도"}</Text>
        <Text>강수확률 {data[8]} %</Text>
        <Text>습도 {data[11]} %</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffddff',
    borderRadius: 10,
    height: 150,
    width: 130,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export default ShortWeatherItem