import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useState } from 'react';
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,PointElement,Tooltip} from 'chart.js'
import { biggestdrop100, biggestdrop200, biggestjump100, biggestjump200, chartingAlbumsfull, chartingalbumssalltime, chartingSongsalltime, chartingSongssfull } from '../../Api/shared';
import { useParams } from "react-router-dom";

ChartJS.register(
    BarElement,CategoryScale,LinearScale,PointElement,Tooltip
)
function Barchartindex()
{
    const params = useParams();
    const chart=params["chart"]
    const [label,setLabel]=useState("")
    const [band,setBand]=useState(false)
    const [data,setData]=useState({
        labels: [],
        datasets: [
          {
            label: 'Weeks on chart',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          },
    
        ],
    })
  
    useEffect(() => {
        const sync=async()=>{
            console.log(chart)
            let result:any
            if(chart==="Longest Charting albums")
            {
                result=await chartingAlbumsfull()
            }
            else if(chart==="Longest charting songs")
            {
                result=await chartingSongssfull()
            }
            else if(chart==="Longest Charting songs of all time")
            {
                result=await chartingSongsalltime()
            }
            else if(chart==="Longest charting albums of all time")
            {
                result=await chartingalbumssalltime()
            }
            else if(chart==="Biggest drops of all time")
            {
                result=await biggestdrop100()
                console.log(result)
            }
            else if(chart==="Biggest drop of positions all time")
            {
                result=await biggestdrop200()
            }
            else if(chart==="Songs biggest jumps")
            {
                result=await biggestjump100()
            }else if(chart==="Albums biggest jumps")
            {
                result=await biggestjump200()
            }
            let etiquetas:any=[]
            let datat:any=[]
            for(let i=0;i<result["data"].length;i++)
            {
                if(chart==="Longest Charting albums" || chart==="Longest charting songs")
                {
                    let str=result["data"][i]["chart"]["songs"]["artist"]+"-"+result["data"][i]["chart"]["songs"]["title"]
                    etiquetas.push(str)
                    datat.push(result["data"][i]["chart"]["songs"]["position"]["weeksOnChart"])
                }
                else if(chart==="Longest Charting songs of all time"||chart==="Longest charting albums of all time")
                {

                    let str=result["data"][i]["_id"]["artist"]+"-"+result["data"][i]["_id"]["title"]
                    etiquetas.push(str)
                    datat.push(result["data"][i]["count"])
                }
                else if(chart==="Biggest drops of all time" || chart==="Biggest drop of positions all time"||chart==="Songs biggest jumps"||chart==="Albums biggest jumps")
                {
                    etiquetas.push(result["data"][i]["_id"]["artist"]+"-"+result["data"][i]["_id"]["title"])
                    datat.push(result["data"][i]["totalAmountDue"])
                }
            }
            if(chart==="Biggest drops of all time")
            {
                setLabel("Number of positions dropped")
            }
            else{
                setLabel("Weeks on chart")
            }
            console.log(label)
            setData({
                labels: etiquetas,
                datasets: [
                  {
                    label: label,
                    data: datat,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                  },
            
                ],
            })
        }
        sync()
        setBand(true)
    }, [])
    useEffect(()=>{
        console.log(data)
    },[data])
    return(
        <div className='my-6 mx-6 flex justify-center'>
             <div className='w-full h-3/4 flex justify-center'>

                <Bar 
                color='red'
                className='w-full h-3/4'
                options={{maintainAspectRatio:false,plugins:{title:{display:true,text:"Longest charting albums on Billboard 200"}}}}
                data={data}
                redraw={true}

                />
            
            </div>
            {band===false &&
            <div><p>tres</p>
            </div>}
        </div>
        
    )
}
export default Barchartindex;