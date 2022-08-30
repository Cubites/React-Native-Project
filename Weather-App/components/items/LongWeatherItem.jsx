import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import nowTime from '../../modules/nowTime';
import moment from 'moment-timezone';

const LongWeatherItem = ({ data, dayAfter }) => {
  let thisTime = nowTime();
  let Afterday = new Date(Number(thisTime.year), Number(thisTime.month) - 1, Number(thisTime.day));
  let displayDay = [
    moment(Afterday.getTime() + (dayAfter * 24 * 3600000)).tz('Asia/Seoul').format('YYYY'),
    moment(Afterday.getTime() + (dayAfter * 24 * 3600000)).tz('Asia/Seoul').format('MM'),
    moment(Afterday.getTime() + (dayAfter * 24 * 3600000)).tz('Asia/Seoul').format('DD')
  ]
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text>{`${displayDay[0]}-${displayDay[1]}-${displayDay[2]}`}</Text>
        <Text>{`(${dayAfter}일 뒤)`}</Text>
      </View>
      <View style={styles.tempbox}>
        <View>
          <Image style={styles.temp} source={require('../../assets/icon/high_temp.png')} />
          <Image style={styles.temp} source={require('../../assets/icon/low_temp.png')} />
        </View>
        <View style={styles.tempText}>
          <Text style={{fontWeight: 'bold'}}>{data[1] + " 도"}</Text>
          <Text style={{fontWeight: 'bold'}}>{data[0] + " 도"}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffddff',
    borderRadius: 10,
    height: 150,
    width: 110,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  tempbox: {
    flexDirection: 'row',
  },
  temp: {
    width: 30,
    height: 30,
    margin: 5
  },
  tempText: {
    justifyContent: 'space-between',
    paddingVertical: 10
  }
});

export default LongWeatherItem