import { StyleSheet, View, Text, Alert } from 'react-native';
import React, { useState, useContext } from 'react';

import { AuthContext } from '../context/AuthProvider';
import FormButton from '../component/FormButton';
import FormInput from '../component/FormInput';
import SocialButton from '../component/SocialButton';
import { validateEmail, removeWhitespace } from '../utils/Validate';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const { signup } = useContext(AuthContext);

  const handleSignup = () => {
    if(email){
      const changeEmail  = removeWhitespace(email);
      if(validateEmail(changeEmail)){
        Alert.alert('이메일 형식으로 입력하세요.');
        return; 
      }
    }else{
      Alert.alert('이메일을 입력하세요.');
      return;
    }

    if(!password){
      Alert.alert('비밀번호를 입력하세요.');
      return;
    }
    if(!repassword){
      console.log(!repassword);
      Alert.alert('비밀번호를 다시 확인해주세요.');
      return;
    }
    if(password != repassword){
      Alert.alert('비밀번호가 다릅니다 다시 확인해세요.');
      return;
    }
    signup(email, password);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>회원가입</Text>

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
        onChangeText={(text) => setRepassword(text)}
        placeholderText="비밀번호 확인"
        iconType="lock" 
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle=" 회 원 가 입 "
        backgroundColor='#0c751e'
        onPress={handleSignup}
      />
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