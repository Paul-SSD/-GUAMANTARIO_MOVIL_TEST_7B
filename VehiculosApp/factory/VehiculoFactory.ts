import { Vehiculo } from "../models/Vehiculo";

// metodo para crear un vehiculo vacio
export const createEmptyVehiculo = (): Vehiculo => ({
    id: crypto.randomUUID(),
    marca: "",
    modelo: "",
    placa: "",
    propietario: "",
    anio: 0,
    tipo_gasolina: ""
})