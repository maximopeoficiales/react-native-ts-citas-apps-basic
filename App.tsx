import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CitaItem from './src/components/Cita/Cita';
import {Cita} from './src/interfaces/Cita';

const App = () => {
  const [citas, setCitas] = useState([
    {
      id: 1,
      paciente: 'maximo',
      propietario: 'maximo junior',
      sintomas: 'tiene hambre',
    },
    {
      id: 2,
      paciente: 'boby',
      propietario: 'mayrin apaza',
      sintomas: 'tiene hambre',
    },
    {
      id: 3,
      paciente: 'Native',
      propietario: 'Chicho',
      sintomas: 'Herida en la pata',
    },
  ] as Cita[]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Administrador de Citas</Text>
        <FlatList
          data={citas}
          renderItem={({item}) => <CitaItem cita={item} />}
          keyExtractor={cita => cita.id.toString()}
        />

        {/* {citas.map(cita => (
          <View key={cita.id}>
            <Text>{cita.paciente}</Text>
          </View>
        ))} */}
      </View>
    </>
  );
};

// la app por defecto usa flex box
const styles = StyleSheet.create({
  container: {backgroundColor: '#AA076B', flex: 1},
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
