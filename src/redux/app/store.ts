import {configureStore} from '@reduxjs/toolkit'
import reducerApp from '../reducers/reducerApp';
import reducerHomestats from '../reducers/reducerHomestats';
import reducerLogin from '../reducers/reducerLogin';
import reducerRegister from '../reducers/reducerRegister';
import reducerHomealbums from '../reducers/reducerHomealbums';
import reducerLong from '../reducers/reducerLong';
import reducerCheck from '../reducers/reducerCheck';
import reducerUser from '../reducers/reducerUser';
export const store = configureStore({
    reducer: {
        users: reducerApp,
        register: reducerRegister,
        login: reducerLogin,
        stathome: reducerHomestats,
        statAlbums: reducerHomealbums,
        longSong: reducerLong,
        checklogin: reducerCheck, 
        usercheck: reducerUser
    },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;