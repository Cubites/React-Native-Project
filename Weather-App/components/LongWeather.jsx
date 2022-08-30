import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LongWeatherItem from './items/LongWeatherItem';

const LongWeather = ({ LongWeatherForeCast }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {
          LongWeatherForeCast.map((data, index) => (
            <LongWeatherItem key={`day${index}`} data={data} dayAfter={index + 3} />
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#df99ef',
    padding: 10,
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  }
})

export default LongWeather