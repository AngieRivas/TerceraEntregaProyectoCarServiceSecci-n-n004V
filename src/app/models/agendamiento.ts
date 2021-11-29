export class Agendamiento {
    id:string;
    idusuario:string;
    nombre_servicio:string;
    dia:string;
    mes:string;
    anio:string;
    hora:string;
    patente:string;
    estado:string;
    fechaAgendamiento:string


    constructor(
        Id:string,
        Idusuario:string,
        Nombre_servicio:string,
        Dia:string,
        Mes:string,
        Anio:string,
        Hora:string,
        Patente:string,
        Estado:string,
        FechaAgendamiento:string
    ){
        this.id=Id;
        this.idusuario=Idusuario;
        this.nombre_servicio=Nombre_servicio;
        this.dia=Dia;
        this.mes=Mes;
        this.anio=Anio;
        this.hora=Hora;
        this.patente=Patente;
        this.estado=Estado;
        this.fechaAgendamiento=FechaAgendamiento;
        

    }
}
