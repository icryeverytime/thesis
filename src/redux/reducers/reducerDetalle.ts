import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getDetalle } from '../../Api/shared';
const initialState={
    intStatus:0,
    strplacas: '',
    strgafete: '',
    strnombre: '',
    strtelefono: '',
    strdireccion: '',
    strcelular: '',
    strcolor: '',
    strmarca: '',
    strdescripcion: '',
    strtipovehiculo:'',
    loadingState:'false'
}
export const getDetalles = createAsyncThunk(
    'detalless/getall',
    async(id:string)=>{
        try{
            const result=await getDetalle(id)
            return result["data"]
        }catch(error){
            console.log(error)

        }
    }
)
const detalleSlice = createSlice({
    name: 'detalles',
    initialState,
    reducers:{
        reset: state => initialState,
    },
    extraReducers:builder=>{
        builder.addCase(getDetalles.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(getDetalles.fulfilled,(state,action)=>{
            state.intStatus=action.payload["intResponse"]
            console.log("Action")
            console.log(action.payload)
            state.strplacas=action.payload["strplaca"]
            state.strgafete=action.payload["strgafete"]
            state.strnombre=action.payload["strnombre"]
            state.strtelefono=action.payload["strtelefono"]
            state.strdireccion=action.payload["strdireccion"]
            state.strcelular=action.payload["strcelular"]
            state.strcolor=action.payload["strcolor"]
            state.strmarca=action.payload["strmarca"]
            state.strdescripcion=action.payload["strdescripcion"]
            state.strtipovehiculo=action.payload["strtipovehiculo"]
            state.loadingState='false'
        })
        builder.addCase(getDetalles.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});

export const {
    reset
} = detalleSlice.actions
export default detalleSlice.reducer;