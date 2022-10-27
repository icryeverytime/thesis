import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/app/hooks";
import { AppDispatch } from "../redux/app/store";
function Navbar()
{
  const [username,setUsername]=useState("")
  const [display, setdisplay] = useState<any|null>(null)
  const dispatch=useDispatch<AppDispatch>()
  const datoslogin=useAppSelector((state)=>state.login)
  useEffect(()=>{
    if(datoslogin["intStatus"]===200 && datoslogin["username"]!=="")
    {
      setUsername(datoslogin["username"])
    }
    console.log(username)
  },[datoslogin])
  useEffect(() => { 
    var three:any=document.getElementById('threebars');
    var flex:any=document.getElementById('flex')
    if(display===true)
    {
      flex.className="flex flex-col xs:flex-row space-between"
      three.className="hidden";
    }
    else if(display===false){
      flex.className='hidden xs:flex xs:flex-row space-between'
      three.className='xs:hidden text-sm sm:text-md md:text-xl text-white hover:text-white/80 py-2 px-1 sm:py-3 sm:px-3 hover:bg-persian-blue font-bold hover:font-black'
    }
  },[display])
  return(
    <nav className="bg-typan-blue   ">
          
          <button
            id="threebars"
            className="xs:hidden text-sm sm:text-md md:text-xl text-white hover:text-white/80 py-2 px-1 sm:py-3 sm:px-3 hover:bg-persian-blue font-bold hover:font-black"

            onClick={()=>setdisplay(true)} 
          >
            Three
          </button>
          <div id="flex" className="hidden xs:flex xs:flex-row space-between">
          <button id="x" className="block xs:hidden text-white" onClick={()=>setdisplay(false)}>
            X
          </button>
          <div>

          </div>
          <NavLink
            id="home"
            onClick={()=>setdisplay(false)}
            className={({ isActive }) =>
              " text-sm sm:text-md md:text-xl text-white hover:text-white/80 py-2 px-1 sm:py-3 sm:px-3 hover:bg-persian-blue font-bold hover:font-black" +
              (isActive
                ? "text-sm sm:text-md md:text-xl text-white py-2 px-1 sm:py-3 sm:px-3 bg-persian-blue font-bold hover:font-black"
                : "")
            }
            end
            to="/"
          >
            Home
          </NavLink>
          <form id="navbusca" className="flex-1 h-full self-center">
            <div className="flex justify-center">
              <input
                id="input2"
                className="rounded-l-lg w-32 text-xs sm:text-md md:text-lg sm:w-40 md:w-72 border-2 outline-none placeholder:italic placeholder:px-2  pl-2"
                type="text"
                placeholder="Search for anything..."
              ></input>
              <input
                id="inputsubmit"
                className=" rounded-r-lg border-2 bg-dodger-blue px-1 text-sm sm:text-md  md:text-lg text-white border-dodger-blue hover:cursor-pointer"
                type="submit"
                value="Search"
                onClick={()=>setdisplay(false)}
              />
            </div>
          </form>
          {username === "" && (
              <NavLink
            id="login"
            onClick={()=>setdisplay(false)}
            className={({ isActive }) =>
              " hover:text-white/80 text-sm sm:text-md md:text-xl text-white py-2 px-1 sm:py-3 sm:px-3 hover:bg-persian-blue font-bold hover:font-black" +
              (isActive
                ? "text-sm sm:text-md md:text-xl text-white py-2 px-1 sm:py-3 sm:px-3 bg-persian-blue font-bold hover:font-black"
                : "")
            }
            to="thesis/Login"
          >
            Login
          </NavLink>
          
            )}
            {username === "" && (
            <NavLink
          onClick={()=>setdisplay(false)}
            id="signup"
            className={({ isActive }) =>
              " hover:text-white/80 text-sm sm:text-md md:text-xl text-white py-2 px-1 sm:py-3 sm:px-3 hover:bg-persian-blue font-bold hover:font-black" +
              (isActive
                ? " text-sm sm:text-md md:text-xl text-white py-2 px-1 sm:py-3 sm:px-3 bg-persian-blue font-bold hover:font-black"
                : "")
            }
            to="thesis/SignUp"
          >
            Sign up
          </NavLink>
      )}
      {username !== "" && (
            <NavLink
          onClick={()=>setdisplay(false)}
            id="username"
            className={({ isActive }) =>
              " hover:text-white/80 text-sm sm:text-md md:text-xl text-white py-2 px-1 sm:py-3 sm:px-3 hover:bg-persian-blue font-bold hover:font-black" +
              (isActive
                ? " text-sm sm:text-md md:text-xl text-white py-2 px-1 sm:py-3 sm:px-3 bg-persian-blue font-bold hover:font-black"
                : "")
            }
            to="thesis/user"
          >
            {username}
          </NavLink>
      )}
        </div>
      </nav>
  );
}
export default Navbar;
