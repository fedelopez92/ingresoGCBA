export class Ingreso {
   
    constructor(
        public fecha: string,
        public hora: string,
        public codigoTarjeta: number,
        public dni: string,
        public nombreEmpleado: string
    ){}    
}
