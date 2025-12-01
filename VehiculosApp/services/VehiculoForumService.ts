import { VehiculoFormStep } from "../constants/VehiculoFormStep";
import { createEmptyVehiculo } from "../factory/VehiculoFactory";
import { Vehiculo } from "../models/Vehiculo";

// capa de logica del negocio para el formulario de vehiculos
export const VehiculoFormService = {
  createInitialState: () => ({
    step: VehiculoFormStep.INITIAL_STEP,
    vehiculo: createEmptyVehiculo(),
  }),

  // para ir a la siguiente pantalla del formulario
  goToNextStep: (currentStep: number) => {
    return Math.min(currentStep + 1, VehiculoFormStep.LAST_STEP);
  },

  // para ir a la pantalla anterior del formulario
  goToPreviousStep: (currentStep: number) => {
    return Math.max(currentStep - 1, VehiculoFormStep.INITIAL_STEP);
  },

  // para guardar el vehiculo en un array
  saveVehiculo: (vehiculos: any[], vehiculo: any) => {
    return [...vehiculos, vehiculo];
  },

  // para actualizar un campo del vehiculo
  updateField:(vehiculo:Vehiculo, field:keyof Vehiculo, value:string)=>({
    ...vehiculo,
    [field]:value
  })

};
