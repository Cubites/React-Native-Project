import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { AuthContext } from '../context/AuthProvider';
import FormButton from '../component/FormButton';
import FormInput from '../component/FormInput';
import SocialButton from '../component/SocialButton';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signin } = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../assets/logo.png')}
        style={styles.logo} 
      />
      <Text style={styles.text}>같이하기</Text>

      <FormInput 
        iconType="user" 
        labelValue={email}
        onChangeText={(text) => setEmail(text)}
        placeholderText="이메일"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />

      <FormInput
        labelValue={password}
        onChangeText={(text) => setPassword(text)}
        placeholderText="비밀번호"
        iconType="lock" 
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle=" 로 그 인 "
        backgroundColor='#0c751e'
        onPress={() => signin(email, password)}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View>
        <SocialButton
          buttonTitle="Facebook 로그인"
          btnType="facebook"
          color="#3b5998"
          backgroundColor="#e6eaf4"
        />
        <SocialButton
          buttonTitle="Google 로그인"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
        />
      </View>
        
      <FormButton
        buttonTitle=" 회 원 가 입 "
        onPress={() => navigation.navigate('Signup')}
        backgroundColor='#467cf0'
      />
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain'
  },
  text: {
    fontFamily: 'Gugi-Regular',
    fontSize: 28,
    marginBottom: 10,
    marginTop: 10,
    color: '#0c751e',
  },
  forgotButton: {
    marginVertical: 35
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#c51313'
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#c51313'
  }
})