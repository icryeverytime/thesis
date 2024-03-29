import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { chartingAlbums } from '../../Api/shared';
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
    Resultchartingposition1:'',
    Resultchartingposition2:'',
    Resultchartingposition3:'',
    Resultchartingposition4:'',
    Resultchartingposition5:'',
    
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

export const chartingalbums = createAsyncThunk(
    'requests/getchartsalbums',
    async()=>{
        try{
            const result=await chartingAlbums()
            console.log(result)
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
        builder.addCase(chartingalbums.pending,(state,action)=>{
            state.loadingStatechartingsongs='true'
        })
        builder.addCase(chartingalbums.fulfilled,(state,action)=>{
            state.intStatuschartingsongs=200
            state.Resultchartingsongstitle1=action.payload[0]["chart"]["songs"]["title"]
            state.Resultchartingsongstitle2=action.payload[1]["chart"]["songs"]["title"]
            state.Resultchartingsongstitle3=action.payload[2]["chart"]["songs"]["title"]
            state.Resultchartingsongstitle4=action.payload[3]["chart"]["songs"]["title"]
            state.Resultchartingsongstitle5=action.payload[4]["chart"]["songs"]["title"]
            state.Resultchartingsongsartist1=action.payload[0]["chart"]["songs"]["artist"]
            state.Resultchartingsongsartist2=action.payload[1]["chart"]["songs"]["artist"]
            state.Resultchartingsongsartist3=action.payload[2]["chart"]["songs"]["artist"]
            state.Resultchartingsongsartist4=action.payload[3]["chart"]["songs"]["artist"]
            state.Resultchartingsongsartist5=action.payload[4]["chart"]["songs"]["artist"]
            state.Resultchartingsongssrc1=action.payload[0]["chart"]["songs"]["cover"]
            state.Resultchartingsongssrc2=action.payload[1]["chart"]["songs"]["cover"]
            state.Resultchartingsongssrc3=action.payload[2]["chart"]["songs"]["cover"]
            state.Resultchartingsongssrc4=action.payload[3]["chart"]["songs"]["cover"]
            state.Resultchartingsongssrc5=action.payload[4]["chart"]["songs"]["cover"]
            state.Resultchartingposition1=action.payload[0]["chart"]["songs"]["position"]["weeksOnChart"]
            state.Resultchartingposition2=action.payload[1]["chart"]["songs"]["position"]["weeksOnChart"]
            state.Resultchartingposition3=action.payload[2]["chart"]["songs"]["position"]["weeksOnChart"]
            state.Resultchartingposition4=action.payload[3]["chart"]["songs"]["position"]["weeksOnChart"]
            state.Resultchartingposition5=action.payload[4]["chart"]["songs"]["position"]["weeksOnChart"]
            state.loadingStatechartingsongs='false'
        })
        builder.addCase(chartingalbums.rejected,(state,action)=>{
            state.intStatuschartingsongs=500
        })
    }
});
export const {
    reset
} = reducerSlice.actions
export default reducerSlice.reducer;