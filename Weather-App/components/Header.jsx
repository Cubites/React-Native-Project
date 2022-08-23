import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({dt}) => {
  const { top } = useSafeAreaInsets();
  const todayText = `${dt.getFullYear()} - ${dt.getMonth() + 1} - ${dt.getDate()}`;
  return (
    <View style={[styles.container, {height: top}]}>
      <View><Text>오늘의 날씨</Text></View>
      <View><Text>{todayText}</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Header