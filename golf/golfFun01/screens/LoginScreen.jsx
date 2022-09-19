import { StyleSheet, View, Text, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthProvider';
import FormButton from '../component/FormButton';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login } = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../assets/logo.png')}
        style={styles.logo} 
      />
      <Text style={styles.text}>같이하기</Text>

      <FormButton
        buttonTitle=" 로 그 인 "
        onPress={() => login(email, password)}
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
  }
})