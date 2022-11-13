import axios, { Axios } from "axios";
import {Api} from "./Api";
import { ResponseHome,detalles,ResponseRegistros } from "./models";
export const insertRegistro=(user)=>{
    return Api.post("/store-data",{
        user: user
    }).catch(error=>{
        console.log(error)
    })
}
export const userInfo=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const userWeekArtist=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=5&period=7day"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const userMonthArtist=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=5&period=1month"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const userAllArtist=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=5&period=overall"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const userWeekAlbum=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=5&period=7day"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const userMonthAlbum=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=5&period=1month"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const userAllAlbum=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=5&period=overall"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const userWeekSong=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=5&period=7day"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const userMonthSong=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=5&period=1month"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const userAllSong=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=5&period=overall"
    return axios.get(url).catch(error=>{
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
export const userget=(user)=>{
    return Api.post("/user",{user:user},{withCredentials:true}).catch(error=>{
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