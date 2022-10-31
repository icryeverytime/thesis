import {configureStore} from '@reduxjs/toolkit'
import reducerApp from '../reducers/reducerApp';
import reducerDetalle from '../reducers/reducerDetalle';
import reducerHomestats from '../reducers/reducerHomestats';
import reducerLogin from '../reducers/reducerLogin';
import reducerRegister from '../reducers/reducerRegister';
import reducerRegistro from '../reducers/reducerRegistro';
import reducerHomealbums from '../reducers/reducerHomealbums';
import reducerLong from '../reducers/reducerLong';
export const store = configureStore({
    reducer: {
        users: reducerApp,
        registros: reducerRegistro,
        detalles: reducerDetalle,
        register: reducerRegister,
        login: reducerLogin,
        stathome: reducerHomestats,
        statAlbums: reducerHomealbums,
        longSong: reducerLong
    },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;