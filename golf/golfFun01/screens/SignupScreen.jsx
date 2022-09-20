import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useContext } from 'react';

import { AuthContext } from '../context/AuthProvider';
import FormButton from '../component/FormButton';
import FormInput from '../component/FormInput';
import SocialButton from '../component/SocialButton';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const { signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>회원가입</Text>

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
      <View>
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
      <FormInput
        labelValue={repassword}
        onChangeText={(text) => setPassword(text)}
        placeholderText="비밀번호 확인"
        iconType="lock" 
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle=" 회 원 가 입 "
        backgroundColor='#0c751e'
        onPress={() => signin(email, password)}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#04460f'
  },
  navButton: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0c751e'
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0c751e'
  }
})

export default SignupScreen