import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { insertRegistro } from '../../Api/shared';
import { login } from '../../Api/shared';
const initialState:ResponseDetalle={
    intStatus:0,
    Result:"",
    username:'',
    loadingState:'false'
}
interface ResponseDetalle {
    intStatus:number;
    Result:string;
    username:string;
    loadingState:string
}

export const logear = createAsyncThunk(
    'requests/getall',
    async(user:any)=>{
        try{
            const result=await login(user)
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
        builder.addCase(logear.pending,(state,action)=>{
            state.loadingState='true'
        })
        builder.addCase(logear.fulfilled,(state,action)=>{
            state.intStatus=200
            state.Result=action.payload["message"]
            if(action.payload["username"]!=="")
            {
                state.username=action.payload["username"]
            }
            state.loadingState='false'
        })
        builder.addCase(logear.rejected,(state,action)=>{
            state.intStatus=500
        })
    }
});
export const {
    reset
} = reducerSlice.actions
export default reducerSlice.reducer;