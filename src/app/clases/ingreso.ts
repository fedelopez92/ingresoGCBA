export class Ingreso {
   
    constructor(
        public dni: string,
        public nombre: string,
        public apellido: string,
        public tarjetaIngreso: number,
        public fechaIngreso: string,
        public horaIngreso: string,
        public idEmpleado: number
    ){}    
}
