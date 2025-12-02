import { Text, View, StyleSheet } from "react-native";
import { Vehiculo } from "../models/Vehiculo";
import { InputTextRFC } from "../components/InputTextRFC";
import { ButtonRFC } from "../components/ButtonRFC";

type DetallesVehiculoScreenProps = {
  vehiculo: Vehiculo;
  onChange: (field: keyof Vehiculo, value: string) => void;
  onPressPrevious: () => void;
  onPressNext: () => void;
};

// crear la pantalla de detalles del vehiculo
export const DetallesVehiculoScreen = ({
  vehiculo,
  onChange,
  onPressPrevious,
  onPressNext,
}: DetallesVehiculoScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Vehiculo</Text>

      <InputTextRFC
        label={"Placa"}
        placeholder="Ingrese el numero de la placa"
        onChangeText={(value: string) => onChange("placa", value)}
      ></InputTextRFC>

      <InputTextRFC
        label={"Propietario"}
        placeholder="Ingrese el nombre del propietario"
        onChangeText={(value: string) => onChange("propietario", value)}
      ></InputTextRFC>

      <InputTextRFC
        label={"Anio"}
        placeholder="Ingrese el anio del vehiculo"
        onChangeText={(value: string) => onChange("anio", value)}
      ></InputTextRFC>

      <InputTextRFC
        label={"Tipo de Gasolina"}
        placeholder="Ingrese el tipo de gasolina"
        onChangeText={(value: string) => onChange("tipo_gasolina", value)}
      ></InputTextRFC>

      <ButtonRFC label={"Regresar"} onPress={onPressPrevious}></ButtonRFC>

      <ButtonRFC label={"Continuar"} onPress={onPressNext}></ButtonRFC>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
