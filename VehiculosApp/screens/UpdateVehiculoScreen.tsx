import { Modal, Text, View, StyleSheet, ScrollView } from "react-native";
import { Vehiculo } from "../models/Vehiculo";
import { InputTextRFC } from "../components/InputTextRFC";
import { ButtonRFC } from "../components/ButtonRFC";
import { useState } from "react";

type UpdateVehiculoScreenProps = {
  visible: boolean;
  vehiculo: Vehiculo;
  onCancel: () => void;
  onUpdate: (vehiculo: Vehiculo) => void;
};

export const UpdateVehiculoScreen = ({
  visible,
  vehiculo,
  onCancel,
  onUpdate,
}: UpdateVehiculoScreenProps) => {
  const [marca, setMarca] = useState(vehiculo.marca);
  const [modelo, setModelo] = useState(vehiculo.modelo);
  const [placa, setPlaca] = useState(vehiculo.placa);
  const [propietario, setPropietario] = useState(vehiculo.propietario);
  const [anio, setAnio] = useState(String(vehiculo.anio));
  const [tipoGasolina, setTipoGasolina] = useState(vehiculo.tipo_gasolina);

  const isFormValid =
    marca.trim() !== "" &&
    modelo.trim() !== "" &&
    placa.trim() !== "" &&
    propietario.trim() !== "" &&
    anio.trim() !== "" &&
    parseInt(anio, 10) !== 0 &&
    tipoGasolina.trim() !== "";

  const handleUpdate = () => {
    const vehiculoActualizado: Vehiculo = {
      id: vehiculo.id,
      marca,
      modelo,
      placa,
      propietario,
      anio: parseInt(anio, 10) || 0,
      tipo_gasolina: tipoGasolina,
    };
    onUpdate(vehiculoActualizado);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>Actualizar Vehículo</Text>
            <View style={styles.divider} />

            <InputTextRFC
              label={"Marca"}
              placeholder="Ingrese la marca del vehiculo"
              value={marca}
              onChangeText={setMarca}
            />

            <InputTextRFC
              label={"Modelo"}
              placeholder="Ingrese el modelo del vehiculo"
              value={modelo}
              onChangeText={setModelo}
            />

            <InputTextRFC
              label={"Placa"}
              placeholder="Ingrese el numero de la placa"
              value={placa}
              onChangeText={setPlaca}
            />

            <InputTextRFC
              label={"Propietario"}
              placeholder="Ingrese el nombre del propietario"
              value={propietario}
              onChangeText={setPropietario}
            />

            <InputTextRFC
              label={"Año"}
              placeholder="Ingrese el año del vehiculo"
              value={anio}
              onChangeText={setAnio}
              keyboardType="numeric"
            />

            <InputTextRFC
              label={"Tipo de Gasolina"}
              placeholder="Ingrese el tipo de gasolina"
              value={tipoGasolina}
              onChangeText={setTipoGasolina}
            />

            <View style={styles.buttonGroup}>
              <ButtonRFC
                label={"Cancelar"}
                onPress={onCancel}
                color={"#e74c3c"}
                style={styles.buttonHalf}
              />
              <ButtonRFC
                label={"Actualizar"}
                onPress={handleUpdate}
                color={"#3498db"}
                style={styles.buttonHalf}
                disabled={!isFormValid}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 24,
    width: "100%",
    maxHeight: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  scrollView: {
    width: "100%",
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
    marginBottom: 24,
    borderRadius: 2,
    width: "40%",
    alignSelf: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 14,
    marginTop: 28,
    marginBottom: 10,
  },
  buttonHalf: {
    flex: 1,
  },
});
