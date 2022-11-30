import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { articleget, randomarticle } from '../../Api/shared';
const initialState:ResponseDetalle={
    intStatus:0,
    Result:[],
    loadingState:'false'
}
interface ResponseDetalle {
    intStatus:number;
    Result:any[];
    loadingState:string
}

export const alltitles = createAsyncThunk(
    'requests/getalltitles',
    async()=>{
        try{
            const result=await articleget()
            console.log(result["data"])
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
        resetTitles: state => initialState,
    },
    extraReducers:builder=>{
        builder.addCase(alltitles.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(alltitles.fulfilled,(state,action)=>{
            state.intStatus=200
            console.log("payload:")
            console.log(action.payload)
            state.Result=action.payload
            state.loadingState='false'
        })
        builder.addCase(alltitles.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});
export const {
    resetTitles
} = reducerSlice.actions
export default reducerSlice.reducer;