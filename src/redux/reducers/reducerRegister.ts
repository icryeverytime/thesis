import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { insertRegistro } from '../../Api/shared';
const initialState:ResponseDetalle={
    intStatus:0,
    Result:"",
    loadingState:'false'
}
interface ResponseDetalle {
    intStatus:number;
    Result:string;
    loadingState:string
}

export const insertRegisters = createAsyncThunk(
    'requests/getall',
    async(user:any)=>{
        try{
            const result=await insertRegistro(user)
            return result["data"]["message"]
        }catch(error){
            console.log(error)

        }   
    }
)
const reducerSlice = createSlice({
    name: 'requests',
    initialState,
    reducers:{
        reset: state => initialState,
    },
    extraReducers:builder=>{
        builder.addCase(insertRegisters.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(insertRegisters.fulfilled,(state,action)=>{
            state.intStatus=200
            state.Result=action.payload
            state.loadingState='false'
        })
        builder.addCase(insertRegisters.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});
export const {
    reset
} = reducerSlice.actions
export default reducerSlice.reducer;