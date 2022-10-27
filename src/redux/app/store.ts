import {configureStore} from '@reduxjs/toolkit'
import reducerApp from '../reducers/reducerApp';
import reducerDetalle from '../reducers/reducerDetalle';
import reducerRegistro from '../reducers/reducerRegistro';

export const store = configureStore({
    reducer: {
        users: reducerApp,
        registros: reducerRegistro,
        detalles: reducerDetalle
    },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;