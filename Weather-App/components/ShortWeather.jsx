import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ShortWeatherItem from './items/ShortWeatherItem';

const ShortWeather = ({ ShortWeatherForeCast }) => {
  // console.log(ShortWeatherForeCast !== [] ? ('ShortWeatherForeCast : ', ShortWeatherForeCast) : '');
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {
          ShortWeatherForeCast.map(data => (
            <ShortWeatherItem key={`${data[0]}`} data={data} />
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
});

export default ShortWeather