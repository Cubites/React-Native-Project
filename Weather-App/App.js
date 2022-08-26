import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import openWeather from './api/openWeather';
import checkWeather from './api/checkWeather';
import temWeather from './api/temWeather';
import TimeWeather from './components/TimeWeather';
import DayWeather from './components/DayWeather';
import Header from './components/Header';


export default function App() {
  console.log('----------------시작----------------');
  const [TimeForeCast, setTimeForeCast] = useState([]);
  const [DayForeCast, setDayForeCast] = useState([])
  const dt = new Date();
  
  useEffect(() => {
    checkWeather('행신1동')
      .then(d => {
        // console.log('-------------------10시간 일기 예보 입니다.-------------------');
        // d.forEach(dd => console.log(dd));
        setTimeForeCast(d);
      })
      .catch(err => console.log('시간별 날씨 API 함수 호출 에러'));
    temWeather('서울')
      .then(d => {
        // console.log('-------------------10일간의 일기 예보 입니다.-------------------');
        // console.log(d);
        setDayForeCast(d);
      })
      .catch(err => console.log('일별 날씨 API 함수 호출 에러'));
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header dt={dt}/>
        <TimeWeather TimeForeCast={TimeForeCast} />
        <DayWeather DayForeCast={DayForeCast} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDF4FF',
  },
});
