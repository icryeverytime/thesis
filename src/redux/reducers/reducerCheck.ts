import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { insertRegistro } from '../../Api/shared';
import { checklogin } from '../../Api/shared';
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

export const checklogine = createAsyncThunk(
    'requests/getall',
    async(user:any)=>{
        try{
            const result=await checklogin()
            console.log(result)
            return result
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
        builder.addCase(checklogine.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(checklogine.fulfilled,(state,action)=>{
            state.intStatus=200
            state.Result=action.payload["data"]
            state.loadingState='false'
        })
        builder.addCase(checklogine.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});
export const {
    reset
} = reducerSlice.actions
export default reducerSlice.reducer;