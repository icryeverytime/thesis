import React, { useEffect, useState } from "react";
import { artistsearch100, artistsearch200, randomarticle, searchartistinfo, topalbumLast, toptracksLast } from "../../Api/shared";
import { Bar } from "react-chartjs-2";
import Article from "../statcomponent/articles";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement, Tooltip);
function Searchartist() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Weeks on chart",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });
  const [data2, setData2] = useState({
    labels: [],
    datasets: [
      {
        label: "Weeks on chart",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });
  const [artist, setArtist] = useState<any>("");
  const [artistTitle, setArtisttile] = useState("");
  const [listeners, setListeners] = useState("");
  const [playcount, setPlaycount] = useState("");
  const [bio, setBio] = useState("");
  const [tags,setTags]=useState<any>([])
  const [band,setBand]=useState(false)
  const [albumname,setAlbumname]=useState<any>([])
  const [songname,setSongname]=useState<any>([])
  const [article,setArticle]=useState<any>([])
  const [albumplay,setAlbumplay]=useState<any>([])
  const [resultado,setResultado]=useState<any>([])
  const [band2,setBand2]=useState(false)
  useEffect(()=>{

  },[band])
  useEffect(()=>{
    console.log(resultado)
    if(resultado["data"]!==undefined)
    {
      for(let i=0;i<resultado["data"].length;i++)
      {
        console.log(resultado["data"][i])
        article.push(resultado["data"][i])
      }
      setBand2(true)
    }
  },[resultado])
  useEffect(()=>{
    const sync = async () => {
      const resul=await randomarticle("Search stats from your favorite artist")
      setResultado(resul)

    }
    sync()
  },[])
  async function submit() {
    console.log(artist);
    setBand(false)
    const result = await searchartistinfo(artist);
    setArtisttile(result["data"]["artist"]["name"]);
    let split = result["data"]["artist"]["bio"]["summary"].split("<a");
    setBio(split[0]);
    setListeners(result["data"]["artist"]["stats"]["listeners"]);
    setPlaycount(result["data"]["artist"]["stats"]["playcount"]);

    const result2=await topalbumLast(artist)

    let aux2=albumname.length
    let aux=tags.length
    let aux3=songname.length
    const result3=await toptracksLast(artist)
    const result4=await artistsearch100(artist)
    const result5=await artistsearch200(artist)
    for(let s=0;s<aux3;s++)
    {
      songname.pop()
    }
    for(let s=0;s<10;s++)
    {
      songname.push(result3["data"]["toptracks"]["track"][s]["name"])
    }
    for(let s=0;s<aux2;s++)
    {
      albumname.pop()
    }
    for(let s=0;s<10;s++)
    {
      albumname.push(result2["data"]["topalbums"]["album"][s]["name"])
    }
    
    for(let s=0;s<aux2;s++)
    {
      albumplay.pop()
    }
    for(let s=0;s<10;s++)
    {
      albumplay.push(result2["data"]["topalbums"]["album"][s]["playcount"])
    }
    for(let p=0;p<aux;p++)
    {
      tags.pop()
    }
    for(let t=0;t<result["data"]["artist"]["tags"]["tag"].length;t++)
    {
      tags.push(result["data"]["artist"]["tags"]["tag"][t]["name"])
    }
    let etiquetas: any = [];
    let datat: any = [];
    let etiquetas2: any = [];
    let datat2: any = [];
    for(let s=0;s<result4["data"].length;s++)
    {
      console.log(result4["data"][s])
      etiquetas.push(result4["data"][s]["_id"]["title"])
      datat.push(result4["data"][s]["count"])
    }
    for(let s=0;s<result5["data"].length;s++)
    {
      console.log(result5["data"][s])
      etiquetas2.push(result5["data"][s]["_id"]["title"])
      datat2.push(result5["data"][s]["count"])
    }
    setData({
      labels: etiquetas,
      datasets: [
        {
          label: "Weeks on chart",
          data: datat,
          backgroundColor: "rgba(114, 9, 183, 0.5)",
        },
      ],
    });
    setData2({
      labels: etiquetas2,
      datasets: [
        {
          label: "Weeks on chart",
          data: datat2,
          backgroundColor: "rgba(67, 97, 238, 0.5)",
        },
      ],
    });
    setBand(true)
  }
  return (
    <div className="pb-6">
      <div className="flex mt-6 justify-center">
        <h1 className="text-2xl font-bold">
          Search stats from your favorite artists
        </h1>
      </div>
      <div className="flex justify-center mt-4 align-center">
        <input
          type="text"
          className="border-blue-600 rounded-sm border-2"
          onChange={(e) => setArtist(e.target.value)}
        ></input>
        <button
          className="bg-blue-600 text-white h-8 text-center"
          onClick={() => submit()}
        >
          Search
        </button>
      </div>
      <div className="flex mx-10 flex-col justify-center mt-8">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold">{artistTitle}</h1>
        </div>
        {band===true &&
         <div className="flex justify-center mt-2">
         {tags.map(function(object,i){
             return <p className="mx-2 bg-flick-pink text-white p-1 rounded" key={i}>{object}</p>
         })
         
         }
         </div>
        }
        <div className="mx-12 mt-2">
          <p>{bio}</p>
        </div>
        {band===true &&
        <div className="flex justify-center mt-4">
        <div className=" bg-vivid-blue text-white py-2 px-2 mx-4 w-40 h-20 flex flex-col justify-center content-center rounded">
          <p className="text-lg font-bold">Listeners:</p>
          <p>{listeners}</p>
        </div>
        <div className=" bg-vivid-blue text-white py-2 px-2 mx-4 w-40 h-20 flex flex-col justify-center content-center rounded">
          <p className="text-lg font-bold">Playcount:</p>
          <p>{playcount}</p>
        </div>
       
      </div>
        }
        {band===true && 
        <div className="flex justify-center mt-8">
        <h1 className="font-bold text-lg">Top 10 listened albums on Last.fm</h1>
        </div>
        }
          {band===true &&
         <div className="flex justify-center mt-2">
         {albumname.map(function(object,i){
          return(
            <div className="mx-2 bg-persian-blue text-white p-1 w-40 text-center rounded">
            <p className="text-sm font-bold" key={i}>{object}</p>
     
            </div>
          ) 
        })} 
         </div>
        }
        {band===true && 
        <div className="flex justify-center mt-8">
        <h1 className="font-bold text-lg">Top 10 listened songs on Last.fm</h1>
        </div>
        }
        {band===true &&
         <div className="flex justify-center mt-2 mb-8">
         {songname.map(function(object,i){
          return(
            <div className="mx-2 bg-persian-blue text-white p-1 w-40 text-center rounded">
            <p className="text-sm font-bold" key={i}>{object}</p>
     
            </div>
          ) 
        })} 
         </div>
        }
        {band==true &&
        <div className="flex justify-center">
          <h1 className="text-lg font-bold">Top Songs on Billboard 100</h1>
        </div>
        }
        {band===true &&
        <div className="flex justify-center">
          <div className="flex justify-center w-3/4 h-3/4">
              <Bar
             className="w-3/4 h-3/4"
             options={{
               scales: {
                 x: {
                   display: false,
                   title: {
                     display: true,
                     text: "Album name",
                   },
                 },
                 y: {
                   display: true,
                   title: {
                     display: true,
                     text: "Weeks",
                   },
                 },
               },
             }}
             data={data}
             redraw={true}
           />
            </div>
        </div>
          }
          {band==true &&
        <div className="flex justify-center">
          <h1 className="text-lg font-bold">Top Albums on Billboard 200</h1>
        </div>
        }
        {band===true &&
        <div className="flex justify-center">
          <div className="flex justify-center w-3/4 h-3/4">
              <Bar
             className="w-3/4 h-3/4"
             options={{
               scales: {
                 x: {
                   display: false,
                   position:"bottom",
                   title: {
                     display: true,
                     text: "Date",
                   },
                 },
                 y: {
                   display: true,
                   title: {
                     display: true,
                     text: "Weeks",
                   },
                 },
               },
             }}
             data={data2}
             redraw={true}
           />
            </div>
        </div>
          }
          <div className="bg-white w-80% mx-32 mb-12 pb-10 mt-4 shadow-xl rounded-lg py-2 flex justify-center">
        <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Other interesting stats</h1>
        {band2===true &&
        <Article article={article}/>
        }
    </div>
    </div>
      </div>
    </div>
  );
}
export default Searchartist;
