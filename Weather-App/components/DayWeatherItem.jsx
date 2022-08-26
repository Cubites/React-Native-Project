import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DayWeatherItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="sunny" size={48} color='orange' />
      </View>
      <View>
        <Text>{data[1] + " 도"}</Text>
        <Text>{data[0] + " 도"}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffddff',
    borderRadius: 10,
    height: 150,
    width: 100,
    margin: 10,
    padding: 10,
    alignItems: 'center'
  }
});

export default DayWeatherItem