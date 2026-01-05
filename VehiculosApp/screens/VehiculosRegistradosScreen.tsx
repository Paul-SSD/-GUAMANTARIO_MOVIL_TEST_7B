import { Text, View, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { Vehiculo } from "../models/Vehiculo";
import { ButtonRFC } from "../components/ButtonRFC";
import { useState } from "react";

type VehiculosRegistradosScreenProps = {
  vehiculos: Vehiculo[];
  onPress: () => void;
  onDelete: (id: string) => void;
};

export const VehiculosRegistradosScreen = ({
  vehiculos,
  onPress,
  onDelete,
}: VehiculosRegistradosScreenProps) => {
  const [selectedVehiculo, setSelectedVehiculo] = useState<string | null>(null);

  const renderVehiculoRow = ({ item }: { item: Vehiculo }) => (
    <TouchableOpacity 
      style={[
        styles.tableRow,
        selectedVehiculo === item.id && styles.selectedRow
      ]}
      onPress={() => setSelectedVehiculo(item.id)}
    >
      <Text style={styles.tableCell}>{item.placa}</Text>
      <Text style={styles.tableCell}>{item.propietario}</Text>
      <Text style={styles.tableCell}>{item.marca}</Text>
      <Text style={styles.tableCell}>{item.modelo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Vehículos Registrados</Text>
        <View style={styles.divider} />

        {/* Encabezado de la tabla */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.headerText]}>Placa</Text>
          <Text style={[styles.tableCell, styles.headerText]}>Dueño</Text>
          <Text style={[styles.tableCell, styles.headerText]}>Marca</Text>
          <Text style={[styles.tableCell, styles.headerText]}>Modelo</Text>
        </View>

        {/* Lista de vehículos */}
        {vehiculos.length > 0 ? (
          <FlatList
            data={vehiculos}
            renderItem={renderVehiculoRow}
            keyExtractor={(item, index) => `${item.placa}-${index}`}
            scrollEnabled={false}
            style={styles.table}
          />
        ) : (
          <Text style={styles.emptyMessage}>No hay vehículos registrados</Text>
        )}

        {/* Botones para registrar otro vehículo y eliminar */}
        <View style={styles.buttonGroup}>
          <ButtonRFC 
            label={"Registrar Otro"} 
            onPress={onPress}
            style={styles.buttonHalf}
            color={"#27ae60"}
          />
          <ButtonRFC 
            label={"Eliminar"} 
            onPress={() => selectedVehiculo && onDelete(selectedVehiculo)}
            style={styles.buttonHalf}
            color={"#e74c3c"}
            disabled={!selectedVehiculo}
          />
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
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#dfe6e9",
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 8,
    color: "#1a1a1a",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  divider: {
    height: 3,
    backgroundColor: "#3498db",
    marginBottom: 20,
    borderRadius: 2,
    width: "30%",
    alignSelf: "center",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2c3e50",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingVertical: 16,
    marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  table: {
    marginBottom: 20,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    overflow: "hidden",
    borderBottomWidth: 2,
    borderBottomColor: "#3498db",
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f5",
    paddingVertical: 14,
  },
  selectedRow: {
    backgroundColor: "#e3f2fd",
    borderLeftWidth: 4,
    borderLeftColor: "#3498db",
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: "center",
    color: "#2c3e50",
    fontWeight: "600",
  },
  headerText: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: 13,
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "#95a5a6",
    marginVertical: 32,
    marginBottom: 32,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 14,
    marginTop: "auto",
  },
  buttonHalf: {
    flex: 1,
  },
});
