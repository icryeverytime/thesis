import React, { useEffect } from "react";
import { useState } from "react";
import { userInfo } from "../../Api/shared";
import { useNavigate } from "react-router-dom";
export const Comment=({comment})=>{
    console.log(comment)
    const history=useNavigate()
    const [profile, setProfile] = useState("https://res.cloudinary.com/dncxshlgc/image/upload/v1668341303/def_iypeki.jpg");
    useEffect(()=>{
        const sync=async()=>{
            if(comment.lastfm!=="")
            {
                const result = await userInfo(comment.lastfm);
                setProfile(result["data"]["user"]["image"][3]["#text"]);
            }
        }
        sync()
    },[])
    return(
        <div className="w-full flex pl-4 py-2 border-2">
            <img src={profile} className="hover:cursor-pointer shadow-xl rounded-full h-12 " onClick={()=>history("/thesis/User/"+comment.user)}/>
            <p className="ml-1 font-bold hover:underline hover:cursor-pointer my-auto" onClick={()=>history("/thesis/User/"+comment.user)}>{comment.user}</p>
            <p className="ml-4 my-auto">{comment.text}</p>
            <p className="text-sm font-light ml-auto mr-4 mt-auto">Posted at: {comment.time}</p>
        </div>
    )
} 