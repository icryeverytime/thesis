import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { longSongs } from '../../Api/shared';
const initialState={
    intStatuschartingsongs:0,
    Resultchartingsongstitle1:'',
    Resultchartingsongstitle2:'',
    Resultchartingsongstitle3:'',
    Resultchartingsongstitle4:'',
    Resultchartingsongstitle5:'',
    Resultchartingsongsartist1:'',
    Resultchartingsongsartist2:'',
    Resultchartingsongsartist3:'',
    Resultchartingsongsartist4:'',
    Resultchartingsongsartist5:'',
    Resultchartingsongssrc1:'',
    Resultchartingsongssrc2:'',
    Resultchartingsongssrc3:'',
    Resultchartingsongssrc4:'',
    Resultchartingsongssrc5:'',
    Resultcount1:'',
    Resultcount2:'',
    Resultcount3:'',
    Resultcount4:'',
    Resultcount5:'',
    loadingStatechartingsongs:'false',
}
interface ResponseDetalle {
    intStatuschartingsongs:number;
    Resultchartingsongs:any[];
    loadingStatechartingsongs:string,
    intStatuschartingalbums:number,
    Resultchartingalbums:any[],
    loadingStatechartingalbums:string,
    intStatusalbumslastweek:number,
    Resultalbumslastweek:string,
    loadingStatealbumslastweek:string,
}

export const longSong = createAsyncThunk(
    'requests/getlong',
    async()=>{
        try{
            const result=await longSongs()
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
        builder.addCase(longSong.pending,(state,action)=>{
            state.loadingStatechartingsongs='true'
        })
        builder.addCase(longSong.fulfilled,(state,action)=>{
            state.intStatuschartingsongs=200
            state.Resultchartingsongstitle1=action.payload["data"][0]["_id"]["title"]
            state.Resultchartingsongstitle2=action.payload["data"][1]["_id"]["title"]
            state.Resultchartingsongstitle3=action.payload["data"][2]["_id"]["title"]
            state.Resultchartingsongstitle4=action.payload["data"][3]["_id"]["title"]
            state.Resultchartingsongstitle5=action.payload["data"][4]["_id"]["title"]
            state.Resultchartingsongsartist1=action.payload["data"][0]["_id"]["artist"]
            state.Resultchartingsongsartist2=action.payload["data"][1]["_id"]["artist"]
            state.Resultchartingsongsartist3=action.payload["data"][2]["_id"]["artist"]
            state.Resultchartingsongsartist4=action.payload["data"][3]["_id"]["artist"]
            state.Resultchartingsongsartist5=action.payload["data"][4]["_id"]["artist"]
            state.Resultchartingsongssrc1=action.payload["data"][0]["_id"]["cover"]
            state.Resultchartingsongssrc2=action.payload["data"][1]["_id"]["cover"]
            state.Resultchartingsongssrc3=action.payload["data"][2]["_id"]["cover"]
            state.Resultchartingsongssrc4=action.payload["data"][3]["_id"]["cover"]
            state.Resultchartingsongssrc5=action.payload["data"][4]["_id"]["cover"]
            state.Resultcount1=action.payload["data"][0]["count"]
            state.Resultcount2=action.payload["data"][1]["count"]
            state.Resultcount3=action.payload["data"][2]["count"]
            state.Resultcount4=action.payload["data"][3]["count"]
            state.Resultcount5=action.payload["data"][4]["count"]
            state.loadingStatechartingsongs='false'
        })
        builder.addCase(longSong.rejected,(state,action)=>{
            state.intStatuschartingsongs=500
        })
    }
});
export const {
    reset
} = reducerSlice.actions
export default reducerSlice.reducer;