import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Weathers from './Weathers';

const Contents = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Weathers />
        {/* <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers />
        <Weathers /> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#df99ef',
    padding: 20,
    flexDirection: 'row'
  }
})

export default Contents