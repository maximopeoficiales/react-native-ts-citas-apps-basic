import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {useForm} from '../../hooks/useForm';
import {Cita} from '../../interfaces/Cita';
import DatePicker from '../DatePicker/DatePicker';
import ButtonPurple from '../shared/ButtonPurple/ButtonPurple';
import shortid from 'shortid';
interface MyProps {
  saveCita(cita: Cita): void;
  hiddenForm(): void;
}
const defaultProps = {};

const Formulario = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {saveCita, hiddenForm} = props;

  let {formValues: cita, handlerChange} = useForm<Cita>({
    id: shortid.generate(),
    paciente: '',
    fecha: '',
    hora: '',
    propietario: '',
    sintomas: '',
    telefono: '',
  });
  let {id, paciente, propietario, telefono, fecha, hora, sintomas} = cita;
  useEffect(() => {
    console.log(cita);
  }, [cita]);
  const handlerSubmit = () => {
    // validacion
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      showAlert();
    } else {
      // paso la validacion
      // console.log(cita);
      saveCita(cita);
      id = shortid.generate();
      hiddenForm();
    }
  };
  const showAlert = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'Ok'}]);
  };
  const handlerConfirmPickerDate = (text: string, date: Date) => {
    handlerChange('fecha', text);
  };
  const handlerConfirmPickerTime = (text: string, date: Date) => {
    handlerChange('hora', text);
  };

  return (
    <>
      <ScrollView style={styles.formulario}>
        <Text style={styles.title}>Crea una Cita</Text>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            value={paciente}
            onChangeText={text => {
              handlerChange('paciente', text);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            value={propietario}
            onChangeText={text => {
              handlerChange('propietario', text);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Telefono Contacto:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={telefono}
            onChangeText={text => {
              handlerChange('telefono', text);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            style={styles.input}
            multiline
            value={sintomas}
            onChangeText={text => {
              handlerChange('sintomas', text);
            }}
          />
        </View>
        <DatePicker
          textLabel="Fecha:"
          mode="date"
          titleButton="Seleccionar la fecha"
          handlerConfirmPicker={handlerConfirmPickerDate}
          headerTextIOS={'Elije la fecha'}
        />
        <DatePicker
          textLabel="Hora:"
          mode="time"
          titleButton="Seleccionar la hora"
          handlerConfirmPicker={handlerConfirmPickerTime}
          headerTextIOS={'Elije la hora'}
          isTime={true}
        />
        <ButtonPurple textBtn="Crear Cita" onPress={handlerSubmit} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formulario: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    // marginBottom: 5,
  },
});
export default Formulario;
