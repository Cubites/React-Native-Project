import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from 'react-native-vector-icons';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => {
  <Stack.Navigator>
    <Stack.Screen
      name="F Login"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e65e5',
          fontSize: 18
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0
        },
        headerRight: () => {
          <View Style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('/')}
            />
          </View>
        }
      }}
    />
  </Stack.Navigator>
}

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state ? route.state.route[route.state.index].name : '';
  }
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTinitColor: '#2e64e5'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outlines"
              color={color}
              size={size}
            />
          )
        })}        
      />
    </Tab.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})