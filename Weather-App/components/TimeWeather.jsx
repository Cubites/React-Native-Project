import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TimeWeatherItem from './TimeWeatherItem';

const TimeWeather = ({ TimeForeCast }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {
          TimeForeCast.map(data => (
            <TimeWeatherItem key={`${data[0]}`} data={data} />
          ))
        }
        {/* {
          TimeForeCast.length !== 0 ? 
          TimeForeCast.forEach(data => (
            <TimeWeatherItem key={`${data[0]}`} data={data} />
          )) :
          <TimeWeatherItem />
        } */}
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