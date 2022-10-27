import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { datos } from '../../Api/models';
import { getAll } from '../../Api/shared';
const initialState:ResponseDetalle={
    intStatus:0,
    Result:[],
    loadingState:'false'
}
interface ResponseDetalle {
    intStatus:number;
    Result:datos[];
    loadingState:string
}

export const getTodo = createAsyncThunk(
    'requests/getall',
    async(dispatch,getstate)=>{
        try{
            const result=await getAll()
            return result["data"]
        }catch(error){
            console.log(error)

        }
    }
)
const reducerSlice = createSlice({
    name: 'requests',
    initialState,
    reducers:{

    },
    extraReducers:builder=>{
        builder.addCase(getTodo.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(getTodo.fulfilled,(state,action)=>{
            state.intStatus=action.payload["intResponse"]
            state.Result=action.payload["Result"]
            state.loadingState='false'
        })
        builder.addCase(getTodo.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});
export default reducerSlice.reducer;