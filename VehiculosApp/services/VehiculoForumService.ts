import { VehiculoFormStep } from "../constants/VehiculoFormStep";
import { createEmptyVehiculo } from "../factory/VehiculoFactory";
import { Vehiculo } from "../models/Vehiculo";

const API_URL = "http://localhost:8080/v1/vehicules";

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

  // llamada POST para crear un vehiculo en el backend
  createVehiculo: async (vehiculo: Vehiculo): Promise<Vehiculo> => {
    const payload = {
      brand: vehiculo.marca,
      model: vehiculo.modelo,
      plate: vehiculo.placa,
      year: vehiculo.anio,
      fuelType: vehiculo.tipo_gasolina,
      owner: vehiculo.propietario,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("No se pudo registrar el vehiculo");
    }

    const data = await response.json();

    return {
      id: data.id,
      marca: data.brand,
      modelo: data.model,
      placa: data.plate,
      propietario: data.owner,
      anio: data.year,
      tipo_gasolina: data.fuelType,
    };
  },

  // para guardar el vehiculo en un array
  saveVehiculo: (vehiculos: Vehiculo[], vehiculo: Vehiculo) => {
    return [...vehiculos, vehiculo];
  },

  // para actualizar un campo del vehiculo
  updateField:(vehiculo:Vehiculo, field:keyof Vehiculo, value:string)=>{
    const updatedValue = field === "anio" ? parseInt(value, 10) || 0 : value;
    return {
      ...vehiculo,
      [field]: updatedValue
    }
  }

};
