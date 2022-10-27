import React, { useEffect, useState } from "react";
import validator from "validator";
import { SweetAlertOptions } from "sweetalert2";
import * as Swal from "sweetalert2";
import { motion } from "framer-motion";
function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [firstnamerequired, setFirstnamerequired] = useState<any|null>(null);
  const [lastnamerequired, setLastnamerequired] = useState<any|null>(null);
  const [usernamerequired, setUsernamerequired] = useState<any|null>(null);
  const [usernameexist, setUsernameexist] = useState<any|null>(null);
  const [emailrequired, setEmailrequired] = useState<any|null>(null);
  const [emailexist, setEmailexist] = useState<any|null>(null);
  const [passwordrequired, setPasswordrequired] = useState<any|null>(null);
  const [confirmpasswordrequired, setConfirmpasswordrequired] = useState<any|null>  (null);
  const [equalpassword, setEqualpassword] = useState<any|null>(null);
  const [emailmatch, setEmailmatch] = useState<any|null>(null);
  useEffect(() => {
    if (firstname === "" && firstnamerequired !== null) {
      setFirstnamerequired(true);
    } else if (firstnamerequired !== null) {
      setFirstnamerequired(false);
    }
  }, [firstname, firstnamerequired]);
  useEffect(() => {
    if (lastname === "" && lastnamerequired !== null) {
      setLastnamerequired(true);
    } else if (lastnamerequired !== null) {
      setLastnamerequired(false);
    }
  }, [lastname, lastnamerequired]);
  useEffect(() => {
    if (username === "" && usernamerequired !== null) {
      setUsernamerequired(true);
    } else if (usernamerequired !== null) {
      setUsernamerequired(false);
    }
    if(usernameexist===true)
    {
      setUsernameexist(false)
    }
    //eslint-disable-next-line
  }, [username, usernamerequired]);
  useEffect(() => {
    if (email === "" && emailrequired !== null) {
      setEmailrequired(true);
    } else if (emailrequired !== null) {
      setEmailrequired(false);
    }
    if (!validator.isEmail(email) && emailrequired !== null) {
      console.log("no es");
      setEmailmatch(true);
    } else if (emailrequired !== null) {
      setEmailmatch(false);
    }
    if(emailexist===true)
    {
      setEmailexist(false)
    }
    //eslint-disable-next-line
  }, [email, emailrequired]);
  useEffect(() => { 
    if (password === "" && passwordrequired !== null) {
      setPasswordrequired(true);
    } else if (passwordrequired !== null) {
      setPasswordrequired(false);
    }
    if (confirmpassword !== password && confirmpassword !== null) {
      setEqualpassword(true);
    } else if (confirmpassword !== null) {
      setEqualpassword(false);
    }
    //eslint-disable-next-line
  }, [password, passwordrequired]);
  useEffect(() => {
    if (confirmpassword === "" && confirmpasswordrequired !== null) {
      setConfirmpasswordrequired(true);
    } else if (confirmpasswordrequired !== null) {
      setConfirmpasswordrequired(false);
    }
    if (confirmpassword !== password && confirmpassword !== null) {
      setEqualpassword(true);
    } else if (confirmpassword !== null) {
      setEqualpassword(false);
    }
    //eslint-disable-next-line
  }, [confirmpassword, confirmpasswordrequired]);

  async function send(aux) {
    if (aux === 1) {
      console.log("resend");
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
      });
    }
    const options2 = {
      title: "Insert code sent to email",
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
      target: document.getElementById("otp-screen2"),
    } as SweetAlertOptions<any,any>;
    await (Swal as any).fire({
      options2
    }).then((result) => {
      if (result.isDismissed === true) {
        send(1);
      } else if (result.isConfirmed === true) {
        const code =
          (document.getElementById("input_1") as HTMLInputElement)?.value +
          (document.getElementById("input_2") as HTMLInputElement)?.value +
          (document.getElementById("input_3") as HTMLInputElement)?.value +
          (document.getElementById("input_4") as HTMLInputElement)?.value +
          (document.getElementById("input_5") as HTMLInputElement)?.value +
          (document.getElementById("input_6") as HTMLInputElement)?.value;
          if(code!==null){

          }
        console.log("code: " + code);
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
            console.log(data.message);
            if (data.message === "Wrong Code") {
              (Swal as any).fire({
                icon: "error",
                title: "Wrong Code",
                showCancelButton: true,
                cancelButtonText: "Resend Code",
              }).then(result=>{
                if (result.isDismissed === true) {
                  send(1);
                }
              });
            } else {
              (Swal as any).fire({
                icon: "success",
                title: "Email verified",
                text: "You can now login!",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "/#/thesis/Login";
                }
              });
            }
          });
        });
      }
    });
  }
  function handleSubmit(event) {
    event.preventDefault()
    if(firstnamerequired!==true && lastnamerequired!==true && usernameexist!==true && usernamerequired!==true && emailexist!==true && emailmatch!==true && emailrequired!==true && passwordrequired!==true && confirmpasswordrequired!==true &&(confirmpassword===password))
    {
      fetch("http://localhost:3001/store-data", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
          password: password,
        },
      }),
    }).then(async function (response) {
      response.json().then((data) => {
        console.log(data.message);
        if (data.message === "inserted") {
          send(0);
        } else if (data.message === "username duplicate") {
          setUsernameexist(true)
        } else if (data.message === "email duplicate") {
          setEmailexist(true)
        }
      });
    });
    }
    else{
      console.log("no esta bueno")
    }
  }
  return (
    <motion.div
      className="pt-5 pb-20"
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
        initial={{ x: "100%" }}
        animate={{ x: "0%", transition: { duration: 1 } }}
        exit={{ x: "100%", transition: { duration: 0.5 } }}
      >
        <div className="text-slate-100 items-center">
          <div className="text-center text-2xl pb-3">Register an account!</div>
        </div>
        <form
          className="flex flex-col justify-center items-center pt-2 pb-2 xs:mx-12 sm:mx-28 md:mx-48 lg:mx-64 xl:mx-80 2xl:mx-96 rounded bg-dodger-blue shadow-2xl drop-shadow-2xl"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full  bg-dodger-blue  flex flex-col items-center rounded-md pt-8">
            {firstnamerequired === true && (
              <p className="text-red-500 font-black mb-2">First name is required</p>
            )}
            <div className="w-3/4 mb-6">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                onBlur={() => {
                  if (firstnamerequired === null) {
                    setFirstnamerequired(false);
                  }
                }}
                className={
                  firstnamerequired
                    ? "border-4 border-red-600 w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid"
                    : "w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                }
                required
              />
            </div>
            {lastnamerequired === true && (
              <p className="text-red-500 font-black mb-2">Last name is required</p>
            )}
            <div className="w-3/4 mb-6">
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                onBlur={() => {
                  if (lastnamerequired === null) {
                    setLastnamerequired(false);
                  }
                }}
                className={
                  lastnamerequired
                    ? "border-4 border-red-600 w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid"
                    : "w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
                }
                required
              />
            </div>
            {usernamerequired === true && (
              <p className="text-red-500 font-black mb-2">Username is required</p>
            )}
            {usernameexist === true && (
              <p className="text-red-500 font-black mb-2">
                Username is already in use
              </p>
            )}
            <div className="w-3/4 mb-6">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => {
                if (usernamerequired === null) {
                  setUsernamerequired(false);
                }
              }}
              className={
                usernamerequired || usernameexist
                ? "border-4 border-red-600 w-full py-4 px-8 h-12 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid"
                : "w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              }
              required
            />
            </div>
            {emailrequired === true && (
              <p className="text-red-500 font-black mb-2">Email is required</p>
            )}
            {emailmatch === true && emailrequired === false && (
              <p className="text-red-500 font-black mb-2">Email is invalid</p>
            )}
            {emailexist === true && (
              <p className="text-red-500 font-black mb-2">Email is already in use</p>
            )}
            <div className="w-3/4 mb-6">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                if (emailrequired === null) {
                  setEmailrequired(false);
                }
              }}
              className={
                emailrequired || emailmatch || emailexist
                ? "border-4 border-red-600 w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid"
                : "w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              }
              required
            />
            </div>
            {passwordrequired === true && (
              <p className="text-red-500 font-black mb-2">Password is required</p>
            )}
            <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                if (passwordrequired === null) {
                  setPasswordrequired(false);
                }
              }}
              className={
                passwordrequired
                ? "border-4 border-red-600 w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid"
                : "w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              }
              required
            />
            </div>
            {confirmpasswordrequired === true && (
              <p className="text-red-500 font-black mb-2">
                Confirm password is required
              </p>
            )}
            {equalpassword === true && confirmpasswordrequired === false && (
              <p className="text-red-500 font-black mb-2">Passwords don't matchup</p>
            )}
            <div className="w-3/4 mb-6">
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              onBlur={() => {
                if (confirmpasswordrequired === null) {
                  setConfirmpasswordrequired(false);
                }
              }}
              className={
                (equalpassword === true && confirmpasswordrequired === false) ||
                confirmpasswordrequired === true
                ? "border-4 border-red-600 w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid"
                : "w-full h-12 py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              }
              required
            />
            </div>
            <div className="w-3/4 mb-12">
            <input
              className="py-4 h-12 bg-purple w-full rounded text-blue-50 font-bold hover:bg-blue-700 hover:cursor-pointer"
              type="submit"
              value="Submit"
            />
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
export default SignUp;
