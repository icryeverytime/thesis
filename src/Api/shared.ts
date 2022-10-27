import {Api} from "./Api";
import { ResponseHome,detalles,ResponseRegistros } from "./models";
export const insertRegistro=(user)=>{
    return Api.post("/store-data",{
        user: user
    }).catch(error=>{
        console.log(error)
    })
}
export const verifyCode=(verify)=>{
    return Api.post("/verifyemail",{
        verify: verify
    }).catch(error=>{
        console.log(error)
    })
}
export const login=(login)=>{
    return Api.post('/login',{
        login:login
    }).catch(error=>{
        console.log(error)
    })
}
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