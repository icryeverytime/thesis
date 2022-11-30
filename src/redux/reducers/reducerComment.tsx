import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getcomment } from '../../Api/shared';
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

export const getComments = createAsyncThunk(
    'requests/getall',
    async(title:any)=>{
        try{
            const result=await getcomment(title)
            console.log("Request:")
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
        resetComment: state => initialState,
    },
    extraReducers:builder=>{
        builder.addCase(getComments.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(getComments.fulfilled,(state,action)=>{
            state.intStatus=200
            console.log("payload:")
            console.log(action.payload)
            state.Result=action.payload
            state.loadingState='false'
        })
        builder.addCase(getComments.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});
export const {
    resetComment
} = reducerSlice.actions
export default reducerSlice.reducer;