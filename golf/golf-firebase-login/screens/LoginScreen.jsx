import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight, ImageBackground, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate('Signin');
  }
  return (
    <SafeAreaView>
        <View style={styles.main}>
          <ImageBackground source={require('../assets/images/login_page.jpg')} resizeMode={'cover'} style={{justifyContent: 'center'}}>
            <View style={styles.logo}>
                <Image source={require('../assets/images/logo.png')} style={{width: 180, height: 90}} />
            </View>
          </ImageBackground>
          <View style={styles.loginBox}>
            <View style={styles.inputBox}>
              <View style={styles.input}>
                <Icon name='person-outline' size={30} color={'black'} />
                <TextInput style={styles.inputText} />
              </View>
              <View style={styles.input}>
                <Icon name='lock-closed-outline' size={30} color={'black'} />
                <TextInput style={styles.inputText} secureTextEntry={true} />
              </View>
            </View>
            <View style={styles.submitBtn}>
              {/* <Button onPress={handleSignUp} title="회원가입" /> */}
              <TouchableHighlight 
                onPress={handleSignUp}
                underlayColor={'#aaaaee'}
                style={styles.submitBtnTch}
              >
                <Text style={styles.submitBtnTchText}>로그인</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main : {
    width: '100%',
    height: '100%'
  },
  loginBox: {
    width: '70%',
    padding: 10,
    marginTop: '20%',
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center'
  },
  logo: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '100%',
    marginBottom: 50
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderRadius: 5,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  inputText: {
    marginLeft: 10,
    fontSize: 20
  },
  submitBtn: {
    width: '50%'
  },
  submitBtnTch: {
    backgroundColor: '#7777dd',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitBtnTchText: {
    fontSize: 17,
    color: '#fff'
  }
})

export default LoginScreen