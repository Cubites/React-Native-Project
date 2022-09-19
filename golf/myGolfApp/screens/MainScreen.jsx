import { Text, View } from 'react-native';
import React from 'react';
import { layoutStyle } from '../style/layoutStyle';
import { mainStyle } from '../style/MainStyle';

const MainScreen = () => {
  return (
    <View style={mainStyle.main}>
      <Text>MainScreen</Text>
    </View>
  )
}

export default MainScreen