import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface MyProps {
  mode: 'date' | 'time' | 'datetime';
  titleButton: string;
  handlerConfirmPicker(date: Date): void;
}
const defaultProps = {
  mode: 'date',
  titleButton: 'Show Date Picker',
};
const DatePicker = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {handlerConfirmPicker, mode, titleButton} = props;

  // datepicker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    // console.warn('A date has been picked: ', date);
    handlerConfirmPicker(date);
    hideDatePicker();
  };

  return (
    <View style={styles.datepicker}>
      <Button title={titleButton} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  datepicker: {
    marginVertical: 5,
  },
});
export default DatePicker;
