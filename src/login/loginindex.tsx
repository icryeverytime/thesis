
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
function Login() {
  const [user, setUser] = useState("");
  const [contra, setContra] = useState("");
  const [userrequired,setUserrequired]=useState<any|null>(null)
  const [contrarequired,setContrarequired]=useState<any|null>(null)
  const [userexist,setUserexist]=useState(false)
  const [contrabad,setContrabad]=useState(false)
  function sendLogin(event)
  {
    event.preventDefault()
    if(userrequired!==true && contrarequired!==true && userexist!==true && contrabad!==true)
    {
      fetch("http://localhost:3001/login", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: {
            username: user,
            contra:contra
          },
        }),
      }).then(async function (response) {
        response.json().then((data) => {
          console.log(data["message"])
          if(data["message"]==="username doesn exist")
          {
            setUserexist(true)  
          }
          else if(data["message"]==="Login"){
            console.log("Logined");
            console.log(data["username"])
          }
          else if(data["message"]==="Incorrect password")
          {
            setContrabad(true)
            console.log("Contra bad")
          }
        })
      })
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
  useEffect(() => {
    if (contra === "" && contrarequired !== null) {
      setContrarequired(true);
    } else if (contrarequired !== null) {
      setContrarequired(false);
      setContrabad(false)
    }
  }, [contra, contrarequired]);
  return (
    <motion.div
      className="pt-10 pb-20"
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
                className="py-4 bg-purple w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              >
                {" "}
                LOGIN
              </button>
            </div>
          </div>
        </form>
        <div className="flex justify-center container mx-auto mt-6 text-slate-100 text-sm">
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
