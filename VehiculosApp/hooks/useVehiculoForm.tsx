import { useCallback, useMemo, useState } from "react";
import { VehiculoFormService } from "../services/VehiculoForumService";
import { Vehiculo } from "../models/Vehiculo";

export const useVehiculoForm = () => {
  // inicializacion del estado del formulario para registrar vehiculos
  const initialState = useMemo(VehiculoFormService.createInitialState, []);
  const [step, setStep] = useState<number>(initialState.step);
  const [vehiculo, setVehiculo] = useState<Vehiculo>(initialState.vehiculo);

  // logica ui para ir al siguiente paso del formulario
  const goToNextStep = useCallback(() => {
    setStep((prev) => VehiculoFormService.goToNextStep(prev));
  }, []);

  // logica ui para ir al paso anterior del formulario
  const goToPreviousStep = useCallback(() => {
    setStep((prev) => VehiculoFormService.goToPreviousStep(prev));
  }, []);

  // logica ui para actualizar un campo del vehiculo
  const updateField = useCallback((field: keyof Vehiculo, value: string) => {
    setVehiculo((prev) => VehiculoFormService.updateField(prev, field, value));
  }, []);

  //logica para reiniciar el formulario y registrar un nuevo vehiculo
  const resetForm = useCallback(() => {
    setStep(initialState.step);
    setVehiculo(initialState.vehiculo);
  }, [initialState]);

  // logica para guardar el vehiculo en el array de vehiculos
  const saveVehiculo = useCallback(
    (vehiculos: Vehiculo[]) => {
      return VehiculoFormService.saveVehiculo(vehiculos, vehiculo);
    },
    [vehiculo]
  );
  return {
    vehiculo,
    step,
    goToNextStep,
    goToPreviousStep,
    updateField,
    resetForm,
    saveVehiculo,
  };
};
