export class Persona {
    id:string;
    rut:string;
    nombre:string;
    apellidoP:string;
    apellidoM:string;
    email:string;
    pass:string;

    constructor(
        Id:string,
        Rut:string,
        Nombre:string,
        ApellidoP:string,
        ApellidoM:string,
        Email:string,
        Pass:string
    ){
        this.id=Id;
        this.rut=Rut;
        this.nombre=Nombre;
        this.apellidoP=ApellidoP;
        this.apellidoM=ApellidoM;
        this.email=Email;
        this.pass=Pass;
        

    }
}
