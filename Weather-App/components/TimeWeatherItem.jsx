import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/*  
  0. 시간
  1. "TMP": "1시간 기온",
  2. "UUU": "풍속(동서성분)",
  3. "VVV": "풍속(남북성분)",
  4. "VEC": "풍향",
  5. "WSD": "풍속",
  6. "SKY": "하늘상태",
  7. "PTY": "강수형태",
  8. "POP": "강수확률",
  9. "WAV": "파고",
  10. "PCP": "1시간 강수량",
  11. "REH": "습도",
  12. "SNO": "1시간 신적설"
*/
const Weathers = ({ data }) => {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="sunny" size={48} color='orange' />
      </View>
      <View>
        <Text>{data[1] + " 도"}</Text>
        <Text>{data[8] + " %"}</Text>
        <Text>{data[11] + " %"}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffddff',
    borderRadius: 10,
    height: 150,
    width: 100,
    margin: 10,
    padding: 10,
    alignItems: 'center'
  }
});

export default Weathers