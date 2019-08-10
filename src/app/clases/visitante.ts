import { Empleado } from './empleado';

export class Visitante {
    private dni: string;
    private nombre: string;
    private apellido: string;
    private tarjetaIngreso: number;
    private fechaIngreso: Date;
    private horaIngreso: Date;
    private empleado: Empleado

    constructor(dni: string, nombre: string, apellido: string, tarjetaIngreso: number, fechaIngreso: Date, horaIngreso: Date, empleado: Empleado){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tarjetaIngreso = tarjetaIngreso;
        this.fechaIngreso = fechaIngreso;
        this.horaIngreso = horaIngreso;
        this.empleado = empleado;
    }

}
