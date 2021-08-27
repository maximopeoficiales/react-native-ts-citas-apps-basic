import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Cita} from '../../interfaces/Cita';
interface MyProps {
  cita: Cita;
  eliminarPaciente(cita: Cita): void; //
}
const defaultProps = {};
const CitaItem = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {cita, eliminarPaciente} = props;

  const handlerPressEliminar = (cita: Cita) => {
    eliminarPaciente(cita);
  };

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.texto}>{cita.id}</Text>
      </View>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.texto}>{cita.fecha}</Text>
      </View>
      <View>
        <Text style={styles.label}>Hora:</Text>
        <Text style={styles.texto}>{cita.hora}</Text>
      </View>
      {/* no se le puede dar estilo */}
      {/* <Button title="Eliminar" onPress={() => {}} /> */}

      <TouchableHighlight
        onPress={() => {
          handlerPressEliminar(cita);
        }}
        style={styles.btnEliminar}>
        <Text style={styles.txtBtnEliminar}>Eliminar &times;</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
    borderRadius: 10,
  },
  txtBtnEliminar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default CitaItem;
