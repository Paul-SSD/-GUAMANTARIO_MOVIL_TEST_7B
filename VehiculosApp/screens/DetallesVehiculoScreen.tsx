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
  // validar que todos los campos requeridos esten llenos
  const isFormValid =
    vehiculo.placa.trim() !== "" &&
    vehiculo.propietario.trim() !== "" &&
    vehiculo.anio !== 0 &&
    String(vehiculo.anio).trim() !== "" &&
    vehiculo.tipo_gasolina.trim() !== "";

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Detalles del Vehículo</Text>
        <View style={styles.divider} />

        <InputTextRFC
          label={"Placa"}
          placeholder="Ingrese el numero de la placa"
          value={vehiculo.placa}
          onChangeText={(value: string) => onChange("placa", value)}
        ></InputTextRFC>

        <InputTextRFC
          label={"Propietario"}
          placeholder="Ingrese el nombre del propietario"
          value={vehiculo.propietario}
          onChangeText={(value: string) => onChange("propietario", value)}
        ></InputTextRFC>

        <InputTextRFC
          label={"Año"}
          placeholder="Ingrese el año del vehiculo"
          value={vehiculo.anio === 0 ? "" : String(vehiculo.anio)}
          onChangeText={(value: string) => onChange("anio", value)}
        ></InputTextRFC>

        <InputTextRFC
          label={"Tipo de Gasolina"}
          placeholder="Ingrese el tipo de gasolina"
          value={vehiculo.tipo_gasolina}
          onChangeText={(value: string) => onChange("tipo_gasolina", value)}
        ></InputTextRFC>

        <View style={styles.buttonGroup}>
          <ButtonRFC
            label={"Regresar"}
            onPress={onPressPrevious}
            color={"#e74c3c"}
            style={styles.buttonHalf}
          ></ButtonRFC>

          <ButtonRFC
            label={"Continuar"}
            onPress={onPressNext}
            color={"#3498db"}
            style={styles.buttonHalf}
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
  buttonGroup: {
    flexDirection: "row",
    gap: 14,
    marginTop: 28,
  },
  buttonHalf: {
    flex: 1,
  },
});
