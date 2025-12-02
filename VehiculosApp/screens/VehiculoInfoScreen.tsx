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
  // validar que los campos requeridos esten llenos
  const isFormValid = vehiculo.marca.trim() !== "" && vehiculo.modelo.trim() !== "";

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Datos del Vehículo</Text>
        <View style={styles.divider} />
        
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

        <View style={styles.buttonContainer}>
          <ButtonRFC 
            label={"Continuar"} 
            onPress={onPress} 
            color={"#3498db"}
            disabled={!isFormValid}
          ></ButtonRFC>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ecf0f5",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#dfe6e9",
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 8,
    color: "#1a1a1a",
    letterSpacing: 0.3,
  },
  divider: {
    height: 3,
    backgroundColor: "#3498db",
    marginBottom: 28,
    borderRadius: 2,
    width: "30%",
  },
  buttonContainer: {
    marginTop: 28,
  },
});
