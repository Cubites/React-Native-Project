import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import openWeather from './api/openWeather';
import TimeWeather from './components/TimeWeather';
import Header from './components/Header';
import weather from './api/weather';

export default function App() {
  const [WeatherData, setWeatherData] = useState({});
  const dt = new Date();

  // useEffect(() => {
  //   console.log(checkWeather('', '', 'goyang'));
  // }, []);
  
  useEffect(() => {
    // setWeatherData({...WeatherData, weather('행신1동')});
    // console.log(WeatherData);
    console.log(weather('행신1동'));
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header dt={dt}/>
        <TimeWeather />
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
