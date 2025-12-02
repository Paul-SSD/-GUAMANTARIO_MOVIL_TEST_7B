import { Text, View, StyleSheet } from "react-native";
import { Vehiculo } from "../models/Vehiculo";
import { InputTextRFC } from "../components/InputTextRFC";
import { ButtonRFC } from "../components/ButtonRFC";

type VehiculoInfoScreenProps = {
  vehiculo: Vehiculo;
  onChange: (field: keyof Vehiculo, value: string) => void;
  onPress: () => void;
};

// se crea la vista materializada para mostrar la informacion del vehiculo
export const VehiculoInfoScreen = ({
  vehiculo,
  onChange,
  onPress,
}: VehiculoInfoScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Datos del Vehiculo</Text>
      <InputTextRFC
        label={"Marca"}
        placeholder="Ingrese la marca del vehiculo"
        value={vehiculo.marca}
        onChangeText={(value: string) => onChange("marca", value)}
      ></InputTextRFC>

      <InputTextRFC
        label={"Modelo"}
        placeholder="Ingrese el modelo del vehiculo"
        value={vehiculo.modelo}
        onChangeText={(value: string) => onChange("modelo", value)}
      ></InputTextRFC>

      <ButtonRFC label={"Continuar"} onPress={onPress}></ButtonRFC>
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
