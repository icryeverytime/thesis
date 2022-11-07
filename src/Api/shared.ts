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
export const chartingSongs=()=>{
    return Api.get("/chartingsongs",{

    }).catch(error=>{
        console.log(error)
    })
}
export const chartingAlbums=()=>{
    return Api.get("/chartingalbums",{

    }).catch(error=>{
        console.log(error)
    })
}
export const longSongs=()=>{
    return Api.get("/longestsongs",{

    }).catch(error=>{
        console.log(error)
    })
}
export const order=()=>{
    return Api.post('/api/userOrders',{prueba:""},{withCredentials:true}).catch(error=>{
        console.log(error)
    })
}
export const checklogin=()=>{
    return Api.post('/checklogin',{},{withCredentials:true}).catch(error=>{
        console.log(error)
    })
}
export const login=(login)=>{
    return Api.post('/login',{login:login},{withCredentials:true}).catch(error=>{
        console.log(error)
    })
}
export const logout=()=>{
    return Api.post('/logout',{},{withCredentials:true}).catch(error=>{
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