import React from 'react';
import {Text, View} from 'react-native';
interface MyProps {}
const defaultProps: MyProps = {};
const TemplateName = (props: MyProps) => {
  props = {...defaultProps, ...props};

  return (
    <View>
      <Text>TemplateName</Text>
    </View>
  );
};

export default TemplateName;
