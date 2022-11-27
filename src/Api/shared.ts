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
export const countbillboard100=()=>{
    let url="http://localhost:3001/countbillboard100"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const countbillboard200=()=>{
    let url="http://localhost:3001/countbillboard200"
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
export const usertopartist=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=50&period=overall"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const usertopsong=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=50&period=overall"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const usersalbums=()=>{
    return Api.get('/mostlistenedalbums').catch(error=>{
        console.log(error)
    })
}
export const usersartists=()=>{
    return Api.get('/mostlistenedartists').catch(error=>{
        console.log(error)
    })
}
export const randomarticle=(title)=>{
    return Api.post("/get-articles",{
        title: title
    }).catch(error=>{
        console.log(error)
    })
}
export const songtitle=()=>{
    return Api.get("/titlesongsum").catch(error=>{
        console.log(error)
    })
}
export const albumtitle=()=>{
    return Api.get("/titlealbumsum").catch(error=>{
        console.log(error)
    })
}
export const entry100=()=>{
    return Api.get("/artistsong100").catch(error=>{
        console.log(error)
    })
}
export const entry200=()=>{
    return Api.get("/artistsong200").catch(error=>{
        console.log(error)
    })
}
export const userssongs=()=>{
    return Api.get('/mostlistenedsongs').catch(error=>{
        console.log(error)
    })
}
export const usertopalbum=(user)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+user+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=50&period=overall"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const searchartistinfo=(artist)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+artist+"&api_key=604024e30367d14d43eda34672a72cf2&format=json"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const topalbumLast=(artist)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+artist+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=10"
    return axios.get(url).catch(error=>{
        console.log(error)
    })
}
export const toptracksLast=(artist)=>{
    let url="http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+artist+"&api_key=604024e30367d14d43eda34672a72cf2&format=json&limit=10"
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
export const chartingAlbumsfull=()=>{
    return Api.get('/chartingalbumsfull',{

    }).catch(error=>{
        console.log(error)
    })
}
export const chartingSongssfull=()=>{
    return Api.get('/chartingsongsall',{

    }).catch(error=>{
        console.log(error)
    })
}
export const chartingSongsalltime=()=>{
    return Api.get('/longestsongsall',{

    }).catch(error=>{
        console.log(error)
    })
}
export const chartingalbumssalltime=()=>{
    return Api.get('/longestalbumsall',{

    }).catch(error=>{
        console.log(error)
    })
}
export const biggestdrop100=()=>{
    return Api.get('/biggestdrop100',{

    }).catch(error=>{
        console.log(error)
    })
}
export const biggestdrop200=()=>{
    return Api.get('/biggestdrop200',{

    }).catch(error=>{
        console.log(error)
    })
}
export const biggestjump100=()=>{
    return Api.get('/biggestjump100',{

    }).catch(error=>{
        console.log(error)
    })
}
export const biggestjump200=()=>{
    return Api.get('/biggestjump200',{

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
export const articleget=()=>{
    return Api.get('/get-article').catch(error=>{
        console.log(error)
    })
}
export const artistsearch100=(artist)=>{
    return Api.post("/getartistsongs",{artist:artist}).catch(error=>{
        console.log(error)
    })
}
export const artistsearch200=(artist)=>{
    return Api.post("/getartistalbums",{artist:artist}).catch(error=>{
        console.log(error)
    })
}
export const userget=(user)=>{
    return Api.post("/user",{user:user},{withCredentials:true}).catch(error=>{
        console.log(error)
    })
}
export const postcomment=(comment,title)=>{
    return Api.post("/postcomment",{comment:comment,title:title},{withCredentials:true}).catch(error=>{
        console.log(error)
    })
}
export const getcomment=(title)=>{
    return Api.post("/getcomments",{title:title},{withCredentials:true}).catch(error=>{
        console.log(error)
    })
}
export const userget2=(user)=>{
    return Api.post("/userlastfm",{user:user},{withCredentials:true}).catch(error=>{
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