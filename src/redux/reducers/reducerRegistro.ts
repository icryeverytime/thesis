import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getRegistro } from '../../Api/shared';
import {datosregistros} from '../../Api/models'
interface detalles{
    intStatus:number;
    Result:datosregistros[];
    loadingState:string;
}
const initialState:detalles={
    intStatus:0,
    Result:[],
    loadingState:'false'
}

export const getRegistros = createAsyncThunk(
    'registros/getall',
    async(id:string)=>{
        try{
            const result=await getRegistro(id)
            return result["data"]
        }catch(error){
            console.log(error)

        }
    }
)
const registroSlice = createSlice({
    name: 'registros',
    initialState,
    reducers:{
        reset: state => initialState,
    },
    extraReducers:builder=>{
        builder.addCase(getRegistros.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(getRegistros.fulfilled,(state,action)=>{
            state.intStatus=action.payload["intResponse"]
            state.Result=action.payload["Result"]
            state.loadingState='false'
        })
        builder.addCase(getRegistros.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});

export const {
    reset
} = registroSlice.actions
export default registroSlice.reducer;