import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { articleget, countbillboard100, randomarticle } from '../../Api/shared';
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

export const bill100count = createAsyncThunk(
    'requests/getalltitles',
    async()=>{
        try{
            const result=await countbillboard100()
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
        resetBill100: state => initialState,
    },
    extraReducers:builder=>{
        builder.addCase(bill100count.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(bill100count.fulfilled,(state,action)=>{
            state.intStatus=200
            console.log("payload:")
            console.log(action.payload)
            state.Result=action.payload
            state.loadingState='false'
        })
        builder.addCase(bill100count.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});
export const {
    resetBill100
} = reducerSlice.actions
export default reducerSlice.reducer;