import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { articleget, countbillboard100, countbillboard200 } from "../../Api/shared";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";
import Article from "./articles";
import { alltitles, resetTitles } from "../../redux/reducers/reducerTitles";
import { bill100count, resetBill100 } from "../../redux/reducers/reducerBillboard100";
function Stat()
{
    const [countBillboard100,setBillboard100]=useState("")
    const [lastbillboard100,setLastbillboard100]=useState("")
    const [uniqueartist100,setUniqueArtist100]=useState("")
    const [uniqueartist200,setUniqueArtist200]=useState("")
    const [countBillboard200,setBillboard200]=useState("")
    const [lastbillboard200,setLastbillboard200]=useState("")
    const [filter100,setFilter100]=useState(false)
    const [year100,setYear100]=useState(0)
    const [year200,setYear200]=useState(0)
    const [unique100,setUnique100]=useState(0)
    const [unique200,setUnique200]=useState(0)
    const [articles,setArticles]=useState<any|null>(null)
    const [article1,setArticle1]=useState<any>([])
    const [article2,setArticle2]=useState<any>([])
    const [article3,setArticle3]=useState<any>([])
    const [bandera,setBandera]=useState(false)
    const [bandera2,setBandera2]=useState(false)
    const dispatch=useDispatch<AppDispatch>()
    const dataarticles=useAppSelector((state)=>state.titles)
    const data100=useAppSelector((state)=>state.count100)
    useEffect(()=>{
        if(data100["intStatus"]===200)
        {
            console.log("Count 100:")
            console.log(data100)
            setBillboard100(data100["Result"]["count"])
            setLastbillboard100(data100["Result"]["week"])
            setUnique100(data100["Result"]["unique"])
            setUniqueArtist100(data100["Result"]["uniqueartist"])
            setYear100(data100["Result"]["year"])
        dispatch(resetBill100())
        }
    },[data100])
    useEffect(()=>{
        console.log("Data articles:")
        console.log(dataarticles)
        if(dataarticles["intStatus"]===200)
        {
            for(let i=0;i<dataarticles["Result"].length;i++)
        {
            if(dataarticles["Result"][i]["tags"].includes("Billboard 100"))
            {
                article1.push(dataarticles["Result"][i])
            }
            if(dataarticles["Result"][i]["tags"].includes("Billboard 200"))
            {
                article2.push(dataarticles["Result"][i])
            }
            if(dataarticles["Result"][i]["tags"].includes("lastfm"))
            {
                article3.push(dataarticles["Result"][i])
            }
        }
        dispatch(resetTitles())
        setBandera2(true)
        }
    },[dataarticles])
    useEffect(()=>{
    dispatch(alltitles())
    dispatch(bill100count())
    
      const sync=async()=>{
        const result2=await countbillboard200()
        setBillboard200(result2["data"]["count"])
        setLastbillboard200(result2["data"]["week"])
        setUnique200(result2["data"]["unique"])
        setUniqueArtist200(result2["data"]["uniqueartist"])
        setYear200(result2["data"]["year"])
        setBandera(true)
      }
      sync()
     },[]);
     const fun=(dato)=>{
        console.log(dato)
        if(dato===false)
        {
            setFilter100(true)
        }
        else{
            setFilter100(false)
        }
     }
    
    return(
        <div className="my-8">
            <div className="flex flex-wrap gap-y-4 gap-x-4 justify-evenly items-center text-white">
                <div className="hover:bg-gradient-to-r from-ultramarine to-dodger-blue  hover:scale-105 bg-ultramarine w-48 h-40 text-center rounded-2xl drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer flex-col justify-center items-center flex-wrap">
                    <h1 className="text-lg font-bold mt-2">Billboard 100 Charts:</h1>
                    <p className="mt-6 text-lg">{countBillboard100}</p>
                    <p className="mt-8 text-sm place-self-start">Last Updated: {lastbillboard100}</p>
                </div>
                <div className="hover:bg-gradient-to-r from-ultramarine to-dodger-blue  hover:scale-105 bg-ultramarine w-48 h-40 text-center rounded-2xl drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer flex-col justify-center items-center flex-wrap">
                    <h1 className="text-lg font-bold mt-2">Billboard 100 Charts</h1>
                    <p className="mt-6 text-lg">{year100}</p>
                    <p>years</p>
                </div>
                <div className="hover:bg-gradient-to-r from-ultramarine to-dodger-blue  hover:scale-105 bg-ultramarine w-48 h-40 text-center rounded-2xl drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer flex-col justify-center items-center flex-wrap">
                    <h1 className="text-lg font-bold mt-2">Billboard 100 unique entries:</h1>
                    <p className="mt-6 text-base">{unique100}</p>
                </div>
                <div className="hover:bg-gradient-to-r from-ultramarine to-dodger-blue  hover:scale-105 bg-ultramarine w-48 h-40 text-center rounded-2xl drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer flex-col justify-center items-center flex-wrap">
                    <h1 className="text-lg font-bold mt-2">Billboard 100 unique artists:</h1>
                    <p className="mt-6 text-base">{uniqueartist100}</p>
                </div>
            </div>
            <div className="flex mt-8 flex-wrap gap-y-4 gap-x-4 justify-evenly items-center text-white">
                <div className="hover:bg-gradient-to-r from-vivid to-dodger-blue  hover:scale-105 bg-vivid-blue w-48 h-40 text-center rounded-2xl drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer flex-col justify-center items-center flex-wrap">
                    <h1 className="text-lg font-bold mt-2">Billboard 200 Charts:</h1>
                    <p className="mt-6 text-base">{countBillboard200}</p>
                    <p className="mt-8 text-sm place-self-start">Last Updated: {lastbillboard200}</p>
                </div>
                <div className="hover:bg-gradient-to-r from-vivid to-dodger-blue  hover:scale-105 bg-vivid-blue w-48 h-40 text-center rounded-2xl drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer flex-col justify-center items-center flex-wrap">
                    <h1 className="text-lg font-bold mt-2">Billboard 200</h1>
                    <p className="mt-6 text-lg">{year200}</p>
                    <p>years</p>
                </div>
                <div className="hover:bg-gradient-to-r from-vivid to-dodger-blue  hover:scale-105 bg-vivid-blue w-48 h-40 text-center rounded-2xl drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer flex-col justify-center items-center flex-wrap">
                    <h1 className="text-lg font-bold mt-2">Billboard 200 unique artists:</h1>
                    <p className="mt-6 text-base">{unique200}</p>
                </div>
                <div className="hover:bg-gradient-to-r from-vivid to-dodger-blue  hover:scale-105 bg-vivid-blue w-48 h-40 text-center rounded-2xl drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer flex-col justify-center items-center flex-wrap">
                    <h1 className="text-lg font-bold mt-2">Billboard 200 unique entries:</h1>
                    <p className="mt-6 text-base">{uniqueartist200}</p>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <h1 className="text-2xl font-bold">Billboard 100</h1>
            </div>
            {bandera2===true &&
            <Article article={article1}/>
            }
            {bandera2===false &&
            <div className="mt-10 flex justify-center">

            <FontAwesomeIcon icon={faSpinner} className="w-52 h-52 animate-spin white-500"/>
            </div>
            
            }
            <div className="mt-10 flex justify-center">
                <h1 className="text-2xl font-bold">Billboard 200</h1>
            </div>
            {bandera2===true &&
            <Article article={article2}/>
            }
            {bandera2===false &&
            <div className="mt-10 flex justify-center">

            <FontAwesomeIcon icon={faSpinner} className="w-52 h-52 animate-spin white-500"/>
            </div>
            
            }
            <div className="mt-10 flex justify-center">
                <h1 className="text-2xl font-bold">Last.fm</h1>
            </div>
            {bandera2===true &&
            <Article article={article3}/>
            }
            {bandera2===false &&
            <div className="mt-10 flex justify-center">

            <FontAwesomeIcon icon={faSpinner} className="w-52 h-52 animate-spin white-500"/>
            </div>
            
            }
        </div>
    )
}
export default Stat;