import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { randomarticle } from '../../Api/shared';
const initialState:ResponseDetalle={
    intStatus:0,
    Result:[],
    loadingState:'false'
}
interface ResponseDetalle {
    intStatus:number;
    Result:[];
    loadingState:string
}

export const otherarticle = createAsyncThunk(
    'requests/getall',
    async(title:any)=>{
        try{
            const result=await randomarticle(title)
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
        resetArticle: state => initialState,
    },
    extraReducers:builder=>{
        builder.addCase(otherarticle.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(otherarticle.fulfilled,(state,action)=>{
            state.intStatus=200
            console.log("payload:")
            console.log(action.payload)
            state.Result=action.payload
            state.loadingState='false'
        })
        builder.addCase(otherarticle.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});
export const {
    resetArticle
} = reducerSlice.actions
export default reducerSlice.reducer;