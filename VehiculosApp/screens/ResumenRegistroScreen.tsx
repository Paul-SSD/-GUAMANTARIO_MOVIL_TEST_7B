import { Text, View, StyleSheet } from "react-native";
import { Vehiculo } from "../models/Vehiculo";
import { ButtonRFC } from "../components/ButtonRFC";

type ResumenRegistroScreenProps = {
  vehiculo: Vehiculo;
  onPressPrevious: () => void;
  onPressRegister: () => void;
};

// se crea la vista para mostrar el resumen del registro del vehiculo
export const ResumenRegistroScreen = ({
  vehiculo,
  onPressPrevious,
  onPressRegister,
}: ResumenRegistroScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Resumen del Registro</Text>
        <View style={styles.divider} />
        
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Marca:</Text>
            <Text style={styles.value}>{vehiculo.marca}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Modelo:</Text>
            <Text style={styles.value}>{vehiculo.modelo}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Placa:</Text>
            <Text style={styles.value}>{vehiculo.placa}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Propietario:</Text>
            <Text style={styles.value}>{vehiculo.propietario}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Año:</Text>
            <Text style={styles.value}>{vehiculo.anio}</Text>
          </View>
          <View style={[styles.infoRow, styles.lastRow]}>
            <Text style={styles.label}>Tipo de Gasolina:</Text>
            <Text style={styles.value}>{vehiculo.tipo_gasolina}</Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <ButtonRFC label={"Regresar"} onPress={onPressPrevious} color={"#e74c3c"} style={styles.buttonHalf}></ButtonRFC>
          <ButtonRFC label={"Registrar"} onPress={onPressRegister} color={"#27ae60"} style={styles.buttonHalf}></ButtonRFC>
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
    marginBottom: 24,
    borderRadius: 2,
    width: "30%",
  },
  infoContainer: {
    backgroundColor: "#f8fbff",
    borderRadius: 14,
    padding: 20,
    marginBottom: 24,
    borderLeftWidth: 5,
    borderLeftColor: "#3498db",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f5",
    alignItems: "center",
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  label: {
    fontWeight: "700",
    color: "#2c3e50",
    fontSize: 15,
    letterSpacing: 0.2,
  },
  value: {
    color: "#3498db",
    fontWeight: "900",
    fontSize: 15,
    letterSpacing: 0.3,
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
