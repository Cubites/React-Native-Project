import { View, Text, TextInput, TouchableHighlight, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { loginStyle } from '../style/LoginStyle';
import { layoutStyle } from '../style/layoutStyle';

const { width, height } = Dimensions.get('screen');

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('Main');
  }
  const handleSignIn = () => {
    navigation.navigate('Signin');
  }

  return (
      <View style={loginStyle.main}>
        <View style={loginStyle.logo}>
          <Image source={require('../images/logo.png')} style={{width: 180, height: 90}} />
        </View>
        <View style={loginStyle.loginBox}>

          <View style={loginStyle.inputBox}>
            <View style={[loginStyle.input, layoutStyle.boxShadow]}>
              <Icon name='person-outline' size={30} color={'black'} />
              <TextInput 
                style={loginStyle.inputText}
                placeholder='아이디' />
            </View>
            <View style={[loginStyle.input, layoutStyle.boxShadow]}>
              <Icon name='lock-closed-outline' size={30} color={'black'} />
              <TextInput 
                style={loginStyle.inputText} 
                secureTextEntry={true}
                placeholder='비밀번호' />
            </View>
          </View>

          <View style={loginStyle.buttonBox}>

            <View style={loginStyle.loginBtn}>
              <TouchableHighlight 
                onPress={handleSignUp}
                underlayColor={'#aaaaee'}
                style={[loginStyle.loginBtnTch, layoutStyle.boxShadow]}
              >
                <Text style={loginStyle.loginBtnTchText}>
                  로그인
                </Text>
              </TouchableHighlight>
            </View>

            <View style={loginStyle.signinBtn}>
              <TouchableOpacity 
                style={layoutStyle.WHcenter}
                onPress={handleSignIn}
              >
                <Text style={loginStyle.signinBtnText}>회원가입</Text>
              </TouchableOpacity>
            </View>

            <View style={loginStyle.snsBtn}>
              <TouchableOpacity>
                <Text>구글</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>페이스북</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>트위터</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
  )
}

export default LoginScreen