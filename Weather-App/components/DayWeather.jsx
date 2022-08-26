import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DayWeatherItem from './DayWeatherItem';

const DayWeather = ({ DayForeCast }) => {
  console.log(DayForeCast);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {
          DayForeCast.map((data, index) => (
            <DayWeatherItem key={`day${index}`} data={data} />
          ))
        }
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

export default DayWeather