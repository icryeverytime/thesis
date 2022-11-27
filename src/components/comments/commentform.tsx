import React, { useEffect, useState } from "react";
import { checklogin } from "../../Api/shared";
import { useAppSelector } from "../../redux/app/hooks";
import { postcomment } from "../../Api/shared";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Commentform({title}){
    const [logged,setLogged]=useState(false)
    const [comment,setComment]=useState("")
    const history=useNavigate()
    async function postComment()
    {
        console.log(comment)
        const result=await postcomment(comment,title)
        console.log(result["data"]["acknowledged"])
        if(result["data"]["acknowledged"]===true)
        {
            (Swal as any).fire({
                icon: "success",
                title: "Comment is posted"
              }).then((result) => {
                window.location.reload();
              });
        }
    }
    useEffect(()=>{
        const sync=async()=>{
            let datos=await checklogin()
            if(datos!==undefined)
            {
                console.log(datos["data"])
                setLogged(true)
            }
            else{
                setLogged(false)
            }

        }
        sync()
    },[])
    return(
        <div>
            {logged===true &&
            <div className="flex flex-col w-3/4  mx-auto mt-4 justify-center content-center">
                <textarea placeholder="Add comment..." maxLength={80} onChange={(e)=>setComment(e.target.value)} className="border-blue-600 rounded-sm w-80 text-sm mx-auto border-2"/>
                <div className="flex justify-center">
                <button onClick={()=>postComment()}
                 className="bg-blue-600 mt-2 w-20 text-white h-8 text-center">
                    Post comment
                </button>
                </div>
            </div>
            }
            {logged===false &&
            <div className="flex flex-col w-3/4  mx-auto mt-4 justify-center content-center">
            <h1 className="mx-auto">Please login to leave a comment</h1>
            <button onClick={()=>history("/thesis/Login")} className="mx-auto bg-dodger-blue text-white py-1 rounded px-2">Log in!</button>
            </div>
            }
        </div>
    )
} 