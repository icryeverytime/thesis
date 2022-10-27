import {Api} from "./Api";
import { ResponseHome,detalles,ResponseRegistros } from "./models";
import axios, { Axios } from "axios";
export const getAll = () => {
    return Api.get<ResponseHome>("getall").catch(error=>{
        console.log(error)
    })
}
export const getDetalle=(id)=>{
    return Api.post<detalles>("getdetalle",{
        strplaca:id
    }).catch(error=>{
        console.log(error)
    })
}
export const getRegistro=(id)=>{
    return Api.post<ResponseRegistros>("getregistros",{
        strplaca:id
    }).catch(error=>{
        console.log(error)
    })
}