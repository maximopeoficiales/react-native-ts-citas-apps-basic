import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cita } from "../interfaces/Cita";

export const saveCitasStorage = async (citas: Cita[]) => {
    try {
        await AsyncStorage.setItem('citas', JSON.stringify(citas));
    } catch (error) {
        console.error(error);
    }
};

export const getCitasStorage = async () => {
    try {
        let citasStorage = await AsyncStorage.getItem('citas');
        let citas = citasStorage !== null ? JSON.parse(citasStorage) : [];
        return citas as Cita[];
    } catch (error) {
        console.error(error);
    }
}