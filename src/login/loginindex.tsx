
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/app/hooks";
import { AppDispatch } from "../redux/app/store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { reset } from "../redux/reducers/reducerLogin";
import * as Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { checklogine } from "../redux/reducers/reducerCheck";
import { logear } from "../redux/reducers/reducerLogin";
import { checklogin } from "../Api/shared";
function Login() {
  const [user, setUser] = useState("");
  const [contra, setContra] = useState("");
  const [userrequired,setUserrequired]=useState<any|null>(null)
  const [contrarequired,setContrarequired]=useState<any|null>(null)
  const [userexist,setUserexist]=useState(false)
  const [contrabad,setContrabad]=useState(false)
  const [loading,setLoading]=useState(false)
  const [username,setUsername]=useState("")
  const dispatch=useDispatch<AppDispatch>()
  const navigate = useNavigate();
  const datoslogin=useAppSelector((state)=>state.login)

  async function verifyc(){
    (Swal as any).fire({
      title: "Insert code sent to email before logging in",
  html:
    '<div className="otp-screen" id="otp-screen">' +
    '<input name="input1" id="input_1" type="text" maxlength="1" class="text-center border-2" size="1"  required>' +
    '<input name="input2" id="input_2" type="text" maxlength="1" class="text-center border-2" size="1" required>' +
    '<input id="input_3" type="text" maxlength="1" class="text-center border-2" size="1" required>' +
    '<input id="input_4" type="text" maxlength="1" class="text-center border-2" size="1" required>' +
    '<input id="input_5" type="text" maxlength="1" class="text-center border-2" size="1" required>' +
    '<input id="input_6" type="text" maxlength="1" class="text-center border-2" size="1" required>' +
    "</div>",
  focusConfirm: false,
  allowOutsideClick: false,
  showCancelButton: true,
  showCloseButton: true,
  cancelButtonText: "Resend Code",
  target: document.getElementById("screen"),
    }).then((result) => {
      if (result.isDismissed === true) {
        send();
      } else if (result.isConfirmed === true) {
        const code =
          (document.getElementById("input_1") as HTMLInputElement)?.value +
          (document.getElementById("input_2") as HTMLInputElement)?.value +
          (document.getElementById("input_3") as HTMLInputElement)?.value +
          (document.getElementById("input_4") as HTMLInputElement)?.value +
          (document.getElementById("input_5") as HTMLInputElement)?.value +
          (document.getElementById("input_6") as HTMLInputElement)?.value;
          const verificar ={
            username: username,
            code: code,
          }
          fetch("http://localhost:3001/verifyemail", {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            verify: {
              username: username,
              code: code,
            },
          }),
        }).then(async function (response) {
          response.json().then((data) => {
            if (data.message === "Wrong Code") {
              (Swal as any).fire({
                icon: "error",
                title: "Wrong Code",
                showCancelButton: true,
                cancelButtonText: "Resend Code",
              }).then(result=>{
                if (result.isDismissed === true) {
                  send();
                }
              });
            } else {
              (Swal as any).fire({
                icon: "success",
                title: "Email verified",
                text: "You can now login!",
              }).then((result) => {
              });
            }
          });
        });
      }
    });
  }
  async function send() {
    fetch("http://localhost:3001/resendcode", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        verify: {
          username: username,
        },
      }),
    })
    verifyc()
}
  async function sendLogin(event)
  {
    event.preventDefault()
    dispatch(reset())
    if(userrequired!==true && contrarequired!==true && userexist!==true && contrabad!==true)
    {
      let login= {
        username: user,
        contra:contra
      }
      dispatch(logear(login))
    }
  }
  useEffect(() => {
    if (user === "" && userrequired !== null) {
      setUserrequired(true);
    } else if (userrequired !== null) {
      setUserrequired(false);
      setUserexist(false);
    }
  }, [user, userrequired]);
  useEffect(()=>{
    console.log(datoslogin)
    if(datoslogin["loadingState"]==='true')
    {
      setLoading(true)
    }
    else{
      setLoading(false)
    }
    if(datoslogin["Result"]==="Incorrect password" && datoslogin["intStatus"]===200)
    {
      setContrabad(true)
      dispatch(reset())
    }
    else if(datoslogin["Result"]==="username doesn exist" && datoslogin["intStatus"]===200)
    {
      setUserexist(true)
      dispatch(reset())
    }
    else if (datoslogin["intStatus"] === 200 && datoslogin["Result"] === "Login") {
      navigate("/")
      dispatch(reset())
    }
    else if(datoslogin["intStatus"]===200 && datoslogin["Result"]==="Verify" && datoslogin["username"]!=="")
    {
      setUsername(datoslogin["username"])
      verifyc()
    }
  },[datoslogin,username])
  useEffect(() => {
    if (contra === "" && contrarequired !== null) {
      setContrarequired(true);
    } else if (contrarequired !== null) {
      setContrarequired(false);
      setContrabad(false)
      setUserexist(false);
    }
  }, [contra, contrarequired]);
  return (
    <motion.div
      className="pt-10 pb-28"
      initial={{ backgroundColor: "#3A0CA3" }}
      animate={{
        transition: { repeat: Infinity, duration: 15 },
        backgroundColor: [
          "#4361EE",
          "#3A0CA3",
          "#B5179E",
          "#3A0CA3",
          "#4361EE",
        ],
      }}
      exit={{ backgroundColor: "#4361EE", transition: { duration: 0.5 } }}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%", transition: { duration: 1 } }}
        exit={{ x: "-100%", transition: { duration: 0.5 } }}
      >
        <div className="text-slate-100 items-center">
          <div className="text-center pb-3 text-2xl">Login!</div>
        </div>
        <form onSubmit={(e)=>sendLogin(e)} className=" flex flex-col justify-center items-center pt-5 pb-5 xs:mx-12 sm:mx-28 md:mx-48 lg:mx-64 xl:mx-80 2xl:mx-96 rounded bg-dodger-blue shadow-2xl drop-shadow-2xl">
          <div className="w-full  bg-dodger-blue  flex flex-col items-center rounded-md pt-8">
          {userrequired === true && (
              <p className="text-red-500 font-black mb-2">Username or email is required</p>
            )}
            {userexist === true && (
              <p className="text-red-500 font-black mb-2">Username or email don't exist</p>
            )}
            <div className="w-3/4 mb-6">
              <input
                type="text"
                name="username"
                id="username"
                className={
                    (userrequired||userexist)
                      ? "border-4 border-red-600 w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid"
                      : "w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                  }
                onChange={(e) => setUser(e.target.value)}
                onBlur={()=>{
                    if(userrequired===null)
                    {
                        setUserrequired(false)
                    }
                }}
                value={user}
                required
                placeholder="Email adress or username"
              />
            </div>
            {contrarequired === true && (
              <p className="text-red-500 font-black mb-2">Password is required</p>
            )}
            {contrabad === true && (
              <p className="text-red-500 font-black mb-2">Login credentials are wrong</p>
            )}
            <div className="w-3/4 mb-6">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setContra(e.target.value)}
                onBlur={()=>{
                    if(contrarequired===null)
                    {
                        setContrarequired(false)
                    }
                }}
                value={contra}
                className={
                    (contrarequired||contrabad)
                      ? "border-4 border-red-600 w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid"
                      : "w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                  }
                placeholder="Password"
                required
              />
            </div>
            <div className="w-3/4 mb-12">
              <button
                type="submit"
                onChange={(e:any) => setContra(e.target.value)}
                disabled={loading}
                className={loading ? "py-4 bg-purple-700 w-full rounded text-blue-50 font-bold opacity-50":"py-4 bg-purple-700 w-full rounded text-blue-50 font-bold hover:bg-purple-800 hover:cursor-pointer"}
              >
              {loading === true && (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin white-500"/>
              )}
              {loading === false && (
                <p>LOGIN</p>
              )}
              </button>
            </div>
          </div>
        </form>
        <div className="flex justify-center container mx-auto mt-6 text-slate-100 text-sm pb-2">
          <div className="flex flex-col sm:flex-row  justify-between md:w-1/2 items-center">
            <div className="flex">Forgot your password</div>
            <div className="flex ">Don't have an account? Get Started</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default Login;
