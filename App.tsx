import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  View,
} from 'react-native';
import CitaItem from './src/components/Cita/Cita';
import Formulario from './src/components/Formulario/Formulario';
import ButtonPurple from './src/components/shared/ButtonPurple/ButtonPurple';
import {Cita} from './src/interfaces/Cita';

const App = () => {
  const [citas, setCitas] = useState([
    {
      id: '1',
      paciente: 'maximo',
      propietario: 'maximo junior',
      sintomas: 'tiene hambre',
    },
    {
      id: '2',
      paciente: 'boby',
      propietario: 'mayrin apaza',
      sintomas: 'tiene hambre',
    },
    {
      id: '3',
      paciente: 'Native',
      propietario: 'Chicho',
      sintomas: 'Herida en la pata',
    },
  ] as Cita[]);
  const [showForm, setShowForm] = useState(false);
  const deleteCita = (cita: Cita) => {
    setCitas(citasActuales => citasActuales.filter(e => e.id !== cita.id));
  };
  const saveCita = (cita: Cita) => {
    setCitas([...citas, cita]);
  };
  const hiddenForm = () => {
    setShowForm(!showForm);
  };
  const hiddenKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={hiddenKeyboard}>
        <View style={styles.container}>
          <Text style={styles.title}>Administrador de Citas</Text>

          <View style={styles.content}>
            <ButtonPurple textBtn="Crear una Cita" onPress={hiddenForm} />
            {showForm ? (
              <Formulario saveCita={saveCita} hiddenForm={hiddenForm} />
            ) : (
              <>
                <Text style={styles.title}>
                  {citas.length > 0
                    ? 'Administra tus Citas'
                    : 'No hay citas :( , agrega una'}
                </Text>

                <FlatList
                  style={styles.list}
                  data={citas}
                  renderItem={({item}) => (
                    <CitaItem cita={item} eliminarPaciente={deleteCita} />
                  )}
                  keyExtractor={cita => cita.id.toString()}
                />
              </>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

// la app por defecto usa flex box
const styles = StyleSheet.create({
  container: {backgroundColor: '#AA076B', flex: 1},
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  list: {
    marginHorizontal: '2.5%',
    flex: 1,
  },
});

export default App;
