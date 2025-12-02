import { Text, View, StyleSheet } from "react-native";
import { Vehiculo } from "../models/Vehiculo";
import { ButtonRFC } from "../components/ButtonRFC";

type ResumenRegistroScreenProps = {
  vehiculo: Vehiculo;
  onPress: () => void;
};

// se crea la vista para mostrar el resumen del registro del vehiculo
export const ResumenRegistroScreen = ({
  vehiculo,
  onPress,
}: ResumenRegistroScreenProps) => {
  return (
    <View>
      <Text>Resumen del Registro</Text>
      <Text style={styles.row}>Marca:{vehiculo.marca}</Text>
      <Text style={styles.row}>Modelo: {vehiculo.modelo}</Text>
      <Text style={styles.row}> Placa: {vehiculo.placa}</Text>
      <Text style={styles.row}>Propierario :{vehiculo.propietario}</Text>
      <Text style={styles.row}> Anio: {vehiculo.anio}</Text>
      <Text style={styles.row}>Tipo de Gasolina: {vehiculo.tipo_gasolina}</Text>

      <ButtonRFC label={"Regresar"} onPress={onPress}></ButtonRFC>
      <ButtonRFC label={"Registrar"} onPress={onPress}></ButtonRFC>
    </View>
  );
};

const styles = StyleSheet.create({
  containe: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
  },
});
