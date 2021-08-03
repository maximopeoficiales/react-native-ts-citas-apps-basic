import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface MyProps {
  mode: 'date' | 'time' | 'datetime';
  titleButton: string;
  locale?: string;
  textLabel?: string;
  headerTextIOS: string;
  cancelTextIOS?: string;
  confirmTextIOS?: string;
  handlerConfirmPicker(text: string, date: Date): void;
  is24Hour?: boolean;
  isTime?: boolean;
}
const defaultProps = {
  mode: 'date',
  textLabel: 'DatePicker',
  titleButton: 'Show Date Picker',
  is24Hour: true,
  locale: 'es_ES',
  cancelTextIOS: 'Cancelar',
  confirmTextIOS: 'Confirmar',
  isTime: false,
};
const DatePicker = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {
    textLabel,
    handlerConfirmPicker,
    mode,
    titleButton,
    locale,
    headerTextIOS,
    cancelTextIOS,
    confirmTextIOS,
    is24Hour,
    isTime,
  } = props;

  // datepicker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [dateCurrent, setDateCurrent] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    // console.warn('A date has been picked: ', date);
    // console.log(date);
    if (!isTime) {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      };
      const fecha = date.toLocaleDateString('es-ES', options);
      setDateCurrent(fecha);
      handlerConfirmPicker(fecha, date);
    } else {
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      };
      const hora = date.toLocaleTimeString('es-ES', options);
      setDateCurrent(hora);
      handlerConfirmPicker(hora, date);
    }

    hideDatePicker();
  };

  return (
    <View style={styles.datepicker}>
      <Text style={styles.label}>{textLabel}</Text>
      <Button title={titleButton} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale={locale}
        headerTextIOS={headerTextIOS}
        cancelTextIOS={cancelTextIOS}
        confirmTextIOS={confirmTextIOS}
        is24Hour={is24Hour}
      />
      <Text>{dateCurrent}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  datepicker: {
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
});
export default DatePicker;
