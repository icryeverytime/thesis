/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { logout } from "../Api/shared";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/app/hooks";
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from "../redux/app/store";
import { checklogin } from "../Api/shared";
import { checklogine } from "../redux/reducers/reducerCheck";
function Navbar() {
  const dispatch=useDispatch<AppDispatch>()
  const datoscheck=useAppSelector((state)=>state.checklogin)
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [username, setUsername] = useState("")
  const [checking,setChecking]=useState(true)
  const [tre,setTre]=useState(true)
  const datoslogin = useAppSelector((state) => state.login)
  useEffect(()=>{
    if(tre===true)
    {
      setTre(false)
    }
  },[tre])
  async function fe()
  {
    let datos=await checklogin()
    setChecking(false)
    if(datos!==undefined)
    {
      setUsername(datos["data"]["data"])
    }
  }
  useEffect(()=>{
    if(username==="" && tre===true)
    {
      setTre(false)
    }
    else if(tre===false)
    {
      
      fe()
    }
  },[tre])
  useEffect(() => {
    if (datoslogin["intStatus"] === 200 && datoslogin["username"] !== "" && datoslogin["Result"] === "Login") {
      setUsername(datoslogin["username"])
      let token=datoslogin["token"]
      console.log(token)
    }
  }, [datoslogin])
  async function clear()
  {
    setUsername("")
    let result=await logout()
    console.log(result)
  }
  return (
      <nav className="top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Music Background
            </Link>
            <Link
              to="/thesis/stat"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Stats
            </Link>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>


          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">

              </li>




              <Link
                to={"thesis/User/"+username}
                className="text-blueGray-700 text-md hover:text-blueGray-500 font-bold leading-relaxed inline-block mr-1 ml-4 py-2 whitespace-nowrap uppercase"
              >
                {username}
              </Link>

              {(username == "" && checking===false) && (

                <li className="flex items-center">
                  <Link
                    className="bg-dodger-blue text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    to="thesis/Login"
                  >
                    Login &nbsp;
                    <i className="text-white leading-lg "><FontAwesomeIcon icon={faSignIn} /></i>
                  </Link>

                </li>

              )}
              {checking===true &&(
                <div className="flex items-center">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin white-500"/>
                </div>
              )}
              
              {(username == "" && checking===false) && (
                <li className="flex items-center">

                  <Link
                    className="bg-dodger-blue text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    to="thesis/signUp"
                  >
                    Signup &nbsp;
                    <i className="text-white leading-lg"><FontAwesomeIcon icon={faUser} /></i>
                  </Link>
                </li>
              )}

              {username !== "" && (
                <li className="flex items-center">
                  <button
                    className="bg-blueGray-700 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>clear()}
                  >
                    Logout &nbsp;
                    <i className="text-white leading-lg"><FontAwesomeIcon icon={faRightFromBracket} /></i>
                  </button>
                </li>
              )}

            </ul>
          </div>
        </div>
      </nav>
  );
}
export default Navbar;
