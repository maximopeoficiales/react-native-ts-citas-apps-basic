import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
interface MyProps {
  textBtn: string;
  onPress(e: any): void;
}
const defaultProps = {};
const ButtonPurple = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {onPress, textBtn} = props;
  return (
    <View>
      <TouchableHighlight onPress={onPress} style={styles.btn}>
        <Text style={styles.txtBtn}>{textBtn}</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
    borderRadius: 10,
    marginBottom:15
  },
  txtBtn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default ButtonPurple;
