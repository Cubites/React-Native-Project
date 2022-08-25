import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import openWeather from './api/openWeather';
// import checkWeather from './api/checkWeather';
import temWeather from './api/temWeather';
import TimeWeather from './components/TimeWeather';
import DayWeather from './components/DayWeather';
import Header from './components/Header';


export default function App() {
  const [WeatherData, setWeatherData] = useState([]);
  const dt = new Date();
  
  useEffect(() => {
    // checkWeather('행신1동')
    //   .then(d => {
    //     d.forEach(dd => console.log(dd));
    //   })
    //   .catch(err => console.log('API 함수 호출 에러'));
    temWeather('서울');
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header dt={dt}/>
        <TimeWeather WeatherData={WeatherData} />
        <DayWeather />
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
