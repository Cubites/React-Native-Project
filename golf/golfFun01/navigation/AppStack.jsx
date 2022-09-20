import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import FormButton from '../component/FormButton';

const AppStack = () => {

  const { logout } = useContext(AuthContext);

  return (
    <View>
      <FormButton
        buttonTitle="로그아웃"
        onPress={logout}
        backgroundColor='#467cf0'
      />
    </View>
  )
}

export default AppStack