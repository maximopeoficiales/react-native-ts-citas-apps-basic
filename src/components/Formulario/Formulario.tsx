import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import DatePicker from '../DatePicker/DatePicker';

interface MyProps {}
const defaultProps: MyProps = {};

const Formulario = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;

  const handlerConfirmPickerDate = (date: Date) => {
    console.log(date.getFullYear());
  };
  const handlerConfirmPickerTime = (date: Date) => {
    console.log(date);
  };

  return (
    <>
      <View style={styles.formulario}>
        {/* <Text>Formulario</Text> */}
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Telefono Contacto:</Text>
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>
        <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput style={styles.input} multiline />
        </View>
        <DatePicker
          mode="date"
          titleButton="Seleccionar la fecha"
          handlerConfirmPicker={handlerConfirmPickerDate}
        />
        <DatePicker
          mode="time"
          titleButton="Seleccionar la hora"
          handlerConfirmPicker={handlerConfirmPickerTime}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
    borderRadius: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 5,
  },
});
export default Formulario;
