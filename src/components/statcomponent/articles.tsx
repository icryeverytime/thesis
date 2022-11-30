import React from "react";
import { useNavigate } from "react-router-dom";

function Article({article}){
    const history=useNavigate()
    
    let art=article.map((a)=>{
        let data:any[]=a["tags"]
        return(
            <div className="mx-4 hover:cursor-pointer hover:shadow-2xl my-4 rounded flex flex-row" onClick={()=>{if(a["title"]==="Our users most listened to songs of all time"||a["title"]==="Our users most listened to artists of all time"||a["title"]==="Pie chart of your top artists"||a["title"]==="Pie chart of your top songs"||a["title"]==="Pie chart of your top albums"||a["title"]==="Our users most listened to albums of all time"){history("/thesis/piechart/"+a["title"])}else if(a["title"]==="Search stats from your favorite artist"){history("/searchartist")}else{history("/thesis/barchart/"+a["title"])}}}>
                <img className="w-52 h-52 rounded-tl-lg rounded-bl-lg" src={a["image"]}/> 
                <div className="w-52 h-52 bg-blueGray-200 rounded-tr-lg rounded-br-lg">
                <p className="mx-2 text-lg font-bold">{a["title"]}</p>
                <div className="flex flex-wrap">
                {data.includes("Billboard 100") &&
                <div className="mx-1 w-18 px-1 py-1 bg-dodger-blue text-white rounded-md text-center">
                <p className="text-sm">Billboard 100</p>
                </div>
                } 
                {data.includes("Billboard 200") &&
                <div className="mx-1 w-18 px-1 py-1 bg-typan-blue text-white rounded-md text-center">
                <p className="text-sm">Billboard 200</p>
                </div>
                }
                {data.includes("lastfm") &&
                <div className="mx-1 w-18 px-1 py-1 bg-flick-pink text-white rounded-md text-center">
                <p className="text-sm">LastFM</p>
                </div>
                }    
                </div>
                <p className="mt-2 mx-2 font-normal text-md">{a["description"]}</p>
                </div>
            </div>
        )
    })
    return(
        <div className="mt-4 flex flex-wrap justify-evenly">
            {art}
        </div>
    )
}
export default Article;