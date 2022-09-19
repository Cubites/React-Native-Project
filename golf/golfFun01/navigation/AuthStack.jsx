import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login"
        component={LoginScreen}
        options={{ header: () => null}}
      />
    </Stack.Navigator>
  )
}

export default AuthStack