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

const xy = require('./api/shortTermWeather/axialValue.json');

export default function App() {
  const [ShortWeatherForeCast, setShortWeatherForeCast] = useState([]);
  const [LongWeatherForeCast, setLongWeatherForeCast] = useState([]);
  const [ShortWeatherLoc, setShortWeatherLoc] = useState("행신1동");
  const [LongWeatherLoc, setLongWeatherLoc] = useState("고양");
  const [NowWeather, setNowWeather] = useState([]);
  const [Clock, setClock] = useState('');
  
  useEffect(() => {
    console.log('----------------시작----------------');
    checkShortWeather(ShortWeatherLoc)
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
          console.log('setNowWeather : ', data[0]);
          console.log('times.hour :', times.hour);
          if(data[0] === (times.hour + '00')){
            console.log('setNowWeatherIf : ', data[0]);
            setNowWeather([...data]);
            break;
          }
        }
      })
      .catch(err => {
        console.log('시간별 날씨 API 함수 호출 에러');
        console.log(err);
      });

    if(LongWeatherLoc == ''){
      xy.forEach((data) => {
        if(data.dong === ShortWeatherLoc){
          setLongWeatherLoc(data.gu.slice(0, data.gu.length() - 1));
          return;
        }
      });
    }
    if(LongWeatherLoc == ''){
      xy.forEach((data) => {
        if(data.gu === ShortWeatherLoc){
          setLongWeatherLoc(data.gu.slice(0, data.gu.length() - 1));
          return;
        }
      });
    }
    if(LongWeatherLoc == ''){
      xy.forEach((data) => {
        if(data.si === ShortWeatherLoc){
          setLongWeatherLoc(data.gu.slice(0, data.gu.length() - 1));
          return;
        }
      });
    }
    console.log("LongWeatherLoc : ", LongWeatherLoc);
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
