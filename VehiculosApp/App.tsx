import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { useVehiculoForm } from './hooks/useVehiculoForm';
import { VehiculoFormStep } from './constants/VehiculoFormStep';
import { VehiculoInfoScreen } from './screens/VehiculoInfoScreen';
import { DetallesVehiculoScreen } from './screens/DetallesVehiculoScreen';
import { ResumenRegistroScreen } from './screens/ResumenRegistroScreen';
import { VehiculosRegistradosScreen } from './screens/VehiculosRegistradosScreen';
import { Vehiculo } from './models/Vehiculo';

export default function App() {
  const { vehiculo, step, goToNextStep, goToPreviousStep, updateField, resetForm, saveVehiculo } = useVehiculoForm();
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);

  // manejadores de eventos para cada pantalla
  const handleVehiculoInfoNext = () => {
    goToNextStep();
  };

  const handleDetallesVehiculoNext = () => {
    goToNextStep();
  };

  const handleDetallesVehiculoPrevious = () => {
    goToPreviousStep();
  };

  const handleResumenRegistroPrevious = () => {
    goToPreviousStep();
  };

  const handleResumenRegistroRegister = () => {
    // guardar el vehiculo en el array
    const nuevosVehiculos = saveVehiculo(vehiculos);
    setVehiculos(nuevosVehiculos);
    // ir a la pantalla final
    goToNextStep();
  };

  const handleRegistrarOtro = () => {
    // reiniciar el formulario y volver al paso inicial
    resetForm();
    setVehiculos(vehiculos);
  };

  
  const renderCurrentStep = () => {
    switch (step) {
      case VehiculoFormStep.INITIAL_STEP:
        return (
          <VehiculoInfoScreen
            vehiculo={vehiculo}
            onChange={updateField}
            onPress={handleVehiculoInfoNext}
          />
        );
      case 1:
        return (
          <DetallesVehiculoScreen
            vehiculo={vehiculo}
            onChange={updateField}
            onPressPrevious={handleDetallesVehiculoPrevious}
            onPressNext={handleDetallesVehiculoNext}
          />
        );
      case 2:
        return (
          <ResumenRegistroScreen
            vehiculo={vehiculo}
            onPressPrevious={handleResumenRegistroPrevious}
            onPressRegister={handleResumenRegistroRegister}
          />
        );
      case VehiculoFormStep.LAST_STEP:
        return (
          <VehiculosRegistradosScreen
            vehiculos={vehiculos}
            onPress={handleRegistrarOtro}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderCurrentStep()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
