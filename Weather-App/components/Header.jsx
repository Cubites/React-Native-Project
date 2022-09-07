import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';

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

const Header = ({Clock, NowWeather}) => {
  console.log('NowWeather : ', NowWeather);
  console.log('NowWeather : ', NowWeather[7], ' / type : ', typeof(NowWeather[7]));
  let weatherImage = '';
  switch(NowWeather[7]){
    case '0':
      weatherImage = require('../assets/icon/sunny.png');
      break;
    case '1':
      weatherImage = require('../assets/icon/rain.png');
      break;
    case '2':
      weatherImage = require('../assets/icon/sleet.png');
      break;
    case '3':
      weatherImage = require('../assets/icon/snow.png');
      break;
    case '4':
      weatherImage = require('../assets/icon/sunny-rain.png');
      break;
    default:
      weatherImage = require('../assets/icon/error.png');
      break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Text>{Clock}</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Image style={styles.icon} source={weatherImage} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>
          {NowWeather[1]} 도
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 70,
    height: 70,
  },
  time: {
    marginTop: 20,
    alignItems: 'center',
  }
});

export default Header