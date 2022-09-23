import { View, Text } from 'react-native';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="같이골프치자"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#0c751e',
            fontWeight: 'bold',
            fontSize: 17
          },
          headerStyle: {
            shadowColor: '#b7ffc3',
            elevation: 2
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <FontAwesome5.Button
                name="plus"
                size={22}
                backgroundColor="#b7ffc3"
                color="#0c751e"
                onPress={() => navigation.navigate('Board')}
              />
            </View>
          )
        }}
      />
    </Stack.Navigator>
  )
}

const MessageStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({route}) => ({
          title: route.params.userName,
          headerBackTitleVisible: false
        })}
      />
    </Stack.Navigator>
  )
}

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerTitle: '회원정보 등록/수정'
        }}
      />
    </Stack.Navigator>
  )
}

const AppStack = ({ navigation }) => {

  const getTabBarVisibility = (route) => {
    const routeName = route.state ? route.state.routes[route.state.index].name : '';
    if(routeName === 'Chat'){}
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOption={{
        actionTintColor: '#0c751e'
      }}
    >
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({route}) => ({
          tabBarLabel: '같이 골프치자',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="people-outline"
              color={color}
              size={size}
            />
          )
        })}
      />
      <Tab.Screen
        name="Message"
        component={MessageStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          )
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={({route}) => ({
          tabBarLabel: 'home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
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