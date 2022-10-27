export interface ResponseRegistros {
    intResponse: number;
    Result:datosregistros[];
}
export interface detalles{
    intStatus:number;
    Result:ResponseDetalle[];
}
export interface ResponseHome {
    intResposne:number;
    Result: datos[];
}
//exportar y utilizar en componentes
interface ResponseDetalle {
    intResponse:string;
    strplacas: string;
    strgafete: string;
    strnombre: string;
    strtelefono:string;
    strdireccion:string;
    strcelular:string;
    strcolor:string;
    strmarca:string;
    strdescripcion:string;
    strtipovehiculo:string;
  }
export interface datos {
    strgafete: string;
    strnombre: string;
    strplaca: string;
    strtelefono: string;
}
export interface datosregistros {
    strresultado: string;
    strfecha: string;
    strhora: string;
    strtipoingreso: string;
    strnota: string;
}
export interface VehiculoCardProps {
    placa: string;
    gafete: string;
    nombre: string;
    telefono:string;
    nav:any
  }
  export interface DetalleCardProps {
    placas: string;
    gafete: string;
    conductor: string;
    telefono:string;
    direccion:string;
    celular:string;
    color:string;
    marca:string;
    descripcion:string;
    tipo:string;
  }
