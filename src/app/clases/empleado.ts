export class Empleado {
    private nombre: string;
    private apellido: string;
    private sector: string;

    constructor(nombre: string, apellido: string, sector: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sector = sector;
    }
}
