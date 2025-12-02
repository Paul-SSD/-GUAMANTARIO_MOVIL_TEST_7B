import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Vehiculo } from "../models/Vehiculo";
import { ButtonRFC } from "../components/ButtonRFC";

type VehiculosRegistradosScreenProps = {
  vehiculos: Vehiculo[];
  onPress: () => void;
};

// pantalla para mostrar todos los vehiculos registrados en una tabla
export const VehiculosRegistradosScreen = ({
  vehiculos,
  onPress,
}: VehiculosRegistradosScreenProps) => {
  // renderizar cada fila de la tabla
  const renderVehiculoRow = ({ item }: { item: Vehiculo }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.placa}</Text>
      <Text style={styles.tableCell}>{item.propietario}</Text>
      <Text style={styles.tableCell}>{item.marca}</Text>
      <Text style={styles.tableCell}>{item.modelo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehículos Registrados</Text>
      // columnas de la tabla
      <View style={styles.tableHeader}>
        <Text style={[styles.tableCell, styles.headerText]}>Placa</Text>
        <Text style={[styles.tableCell, styles.headerText]}>Dueño</Text>
        <Text style={[styles.tableCell, styles.headerText]}>Marca</Text>
        <Text style={[styles.tableCell, styles.headerText]}>Modelo</Text>
      </View>
      // mostrar los vehiculos registrados
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
      <ButtonRFC
        label={"Registrar Otro"}
        onPress={onPress}
        style={styles.button}
      />
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
    marginBottom: 20,
    textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#007bff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 12,
    marginBottom: 0,
  },
  table: {
    marginBottom: 20,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingVertical: 12,
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: "center",
  },
  headerText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "#999999",
    marginVertical: 20,
    marginBottom: 30,
  },
  button: {
    marginTop: "auto",
  },
});
