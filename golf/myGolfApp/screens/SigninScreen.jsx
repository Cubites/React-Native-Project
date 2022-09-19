import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { layoutStyle } from '../style/layoutStyle';
import { signinSyle } from '../style/SigninStyle';

const SigninScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
      <View style={signinSyle.main}>
        <View style={signinSyle.logo}>
          <Image source={require('../images/logo.png')} style={{width: 180, height: 90}} />
        </View>
        <View style={signinSyle.loginBox}>

          <View style={signinSyle.inputBox}>
            <View style={[signinSyle.input, layoutStyle.boxShadow]}>
              <FontistoIcon name='email' size={30} color={'black'} />
              <TextInput 
                style={signinSyle.inputText}
                placeholder='이메일' />
            </View>
            <View style={[signinSyle.input, layoutStyle.boxShadow]}>
              <Ionicons name='lock-closed-outline' size={30} color={'black'} />
              <TextInput 
                style={signinSyle.inputText} 
                secureTextEntry={true}
                placeholder='비밀번호' />
            </View>
          </View>

          <View style={signinSyle.buttonBox}>

            <View style={signinSyle.loginBtn}>
              <TouchableHighlight 
                onPress={handleLogin}
                underlayColor={'#aaaaee'}
                style={[signinSyle.loginBtnTch, layoutStyle.boxShadow]}
              >
                <Text style={signinSyle.loginBtnTchText}>
                  회원가입
                </Text>
              </TouchableHighlight>
            </View>

          </View>
        </View>
      </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({})