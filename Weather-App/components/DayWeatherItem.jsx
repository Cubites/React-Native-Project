import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DayWeatherItem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="sunny" size={48} color='orange' />
      </View>
      <Text>시간대별 날씨 예보 나오는 칸</Text>
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