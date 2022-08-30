import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment-timezone';
// import openWeather from './api/openWeather';
import checkShortWeather from './api/shortTermWeather/checkShortWeather';
import checkLongWeather from './api/longTermWeather/checkLongWeather';
import ShortWeather from './components/ShortWeather';
import LongWeather from './components/LongWeather';
import Header from './components/Header';
import Dust from './components/Dust';


export default function App() {
  const [ShortWeatherForeCast, setShortWeatherForeCast] = useState([]);
  const [LongWeatherForeCast, setLongWeatherForeCast] = useState([]);
  const [NowWeather, setNowWeather] = useState([]);
  const [Clock, setClock] = useState('');
  
  useEffect(() => {
    console.log('----------------시작----------------');
    checkShortWeather('행신1동')
      .then(d => {
        // console.log('-------------------10시간 일기 예보 입니다.-------------------');
        // d.forEach(dd => console.log(dd));
        let nowTime = new Date();
        let times = {
            year: moment(nowTime.getTime()).tz('Asia/Seoul').format('YYYY'),
            month: moment(nowTime.getTime()).tz('Asia/Seoul').format('MM'),
            day: moment(nowTime.getTime()).tz('Asia/Seoul').format('DD'),
            hour: moment(nowTime.getTime()).tz('Asia/Seoul').format('HH'),
            minute: moment(nowTime.getTime()).tz('Asia/Seoul').format('mm')
        };
        setClock(`${times.year}년 ${times.month}월 ${times.day}일 ${times.hour}시 ${times.minute}분`);
        setShortWeatherForeCast(d);
        for(data of d){
          if(data[0] === (times.hour + '00')){
            setNowWeather([...data]);
            break;
          }
        }
      })
      .catch(err => {
        console.log('시간별 날씨 API 함수 호출 에러');
        console.log(err);
      });

    checkLongWeather('서울')
      .then(d => {
        // console.log('-------------------10일간의 일기 예보 입니다.-------------------');
        // console.log(d);
        setLongWeatherForeCast(d);
      })
      .catch(err => {
        console.log('일별 날씨 API 함수 호출 에러');
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header Clock={Clock} NowWeather={NowWeather} />
          <ShortWeather ShortWeatherForeCast={ShortWeatherForeCast} />
          <LongWeather LongWeatherForeCast={LongWeatherForeCast} />
          {/* <Dust ShortWeatherForeCast={ShortWeatherForeCast} /> */}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDF4FF',
  },
});
