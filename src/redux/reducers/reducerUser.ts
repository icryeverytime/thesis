import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { userget } from '../../Api/shared';
const initialState:ResponseDetalle={
    intStatus:0,
    Result:"",
    userequal:"",
    lastfm:"",
    loadingState:'false'
}
interface ResponseDetalle {
    intStatus:number;
    Result:string;
    userequal:string;
    lastfm:string;
    loadingState:string;
}

export const getuser = createAsyncThunk(
    'requests/getuser',
    async(user:any)=>{
        try{
            const result=await userget(user)
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
        reset: state => initialState,
    },
    extraReducers:builder=>{
        builder.addCase(getuser.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(getuser.fulfilled,(state,action)=>{
            state.intStatus=200
            state.Result=action.payload["data"]
            state.userequal=action.payload["data"]["very"]
            state.lastfm=action.payload["data"]["lastfm"]
            state.loadingState='false'
        })
        builder.addCase(getuser.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});
export const {
    reset
} = reducerSlice.actions
export default reducerSlice.reducer;