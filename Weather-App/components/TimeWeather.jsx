import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TimeWeatherItem from './TimeWeatherItem';

const TimeWeather = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <TimeWeatherItem />
        {/* <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem />
        <TimeWeatherItem /> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#df99ef',
    padding: 20,
    flexDirection: 'row'
  }
})

export default TimeWeather