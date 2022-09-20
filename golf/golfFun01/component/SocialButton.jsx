import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { windowHeight } from '../utils/Dimention';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({buttonTitle, btnType, color, backgroundColor, ...rest}) => {
  return (
    <TouchableOpacity 
      style={[styles.buttonContainer, {backgroundColor}]}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <FontAwesome 
          name={btnType}
          style={styles.icon}
          size={22}
          color={color} 
        />
      </View>
      <View style={styles.btnTextWrapper}>
        <Text>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SocialButton

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 5
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontWeight: 'bold'
  },
  btnTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

})