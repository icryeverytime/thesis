import React, { useEffect, useState } from "react";
import validator from "validator";
import Swal from "sweetalert2";
import './animation.css'
function SignUp(){
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmpassword]=useState("")
  const [firstnamerequired,setFirstnamerequired]=useState(null)
  const [lastnamerequired,setLastnamerequired]=useState(null)
  const [usernamerequired,setUsernamerequired]=useState(null)
  const [usernameexist,setUsernameexist]=useState(null)
  const [emailrequired,setEmailrequired]=useState(null)
  const [emailexist,setEmailexist]=useState(null)
  const [passwordrequired,setPasswordrequired]=useState(null)
  const [confirmpasswordrequired,setConfirmpasswordrequired]=useState(null)
  const [equalpassword,setEqualpassword]=useState(null)
  const [emailmatch,setEmailmatch]=useState(null)
  const [formvalid,setFormvalid]=useState(null)
  useEffect(()=>{
    if(firstname==="" && firstnamerequired!==null)
    {
      setFirstnamerequired(true)
    }
    else if(firstnamerequired!==null){
      setFirstnamerequired(false)
    }
  },[firstname,firstnamerequired])
  useEffect(()=>{
    if(lastname==="" && lastnamerequired!==null)
    {
      setLastnamerequired(true)
    }
    else if(lastnamerequired!==null){
      setLastnamerequired(false)
    }
  },[lastname,lastnamerequired])
  useEffect(()=>{
    if(username==="" && usernamerequired!==null)
    {
      setUsernamerequired(true)
    }
    else if(usernamerequired!==null){
      setUsernamerequired(false)
    }
  },[username,usernamerequired])
  useEffect(()=>{
    if(email==="" && emailrequired!==null )
    {
      setEmailrequired(true)
    }
    else if(emailrequired!==null){
      setEmailrequired(false)
    }
  },[email,emailrequired])
  useEffect(()=>{
    if(password==="" && passwordrequired!==null)
    {
      setPasswordrequired(true)
    }
    else if(passwordrequired!==null){
      setPasswordrequired(false)
    }
  },[password,passwordrequired])
  useEffect(()=>{
    if(confirmpassword==="" && confirmpasswordrequired!==null)
    {
      setConfirmpasswordrequired(true)
    }
    else if(confirmpasswordrequired!==null){
      setConfirmpasswordrequired(false)
    }
  },[confirmpassword,confirmpasswordrequired])
  
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
    await Swal.fire({
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
    }).then((result) => {
      console.log(result);
      if (result.isDismissed === true) {
        this.send(1);
      } else if (result.isConfirmed === true) {
        const code =
          document.getElementById("input_1").value +
          document.getElementById("input_2").value +
          document.getElementById("input_3").value +
          document.getElementById("input_4").value +
          document.getElementById("input_5").value +
          document.getElementById("input_6").value;
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
              Swal.fire({
                icon: "error",
                title: "Wrong Code",
                footer: '<Button href="">Resend Code</Button>',
              });
            } else {
              Swal.fire({
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
  function handleSubmit (event)  {
    let self = this;
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
          self.send();
        } else if (data.message === "username duplicate") {
          self.setState({ usernameexist: true });
        } else if (data.message === "email duplicate") {
          self.setState({ emailexist: true });
        }
      });
    });
    event.preventDefault();
  };
    return (
        <div className="pt-20 pb-10 h-screen" id="css-selector">
            <form
        className="flex flex-col justify-center items-center pt-5 pb-5 xs:mx-12 sm:mx-28 md:mx-48 lg:mx-64 xl:mx-80 2xl:mx-96 rounded bg-dodger-blue shadow-2xl drop-shadow-2xl"
        onSubmit={()=>handleSubmit()}
      >
        <h1 className="text-white text-2xl">Register an account</h1>
        <p className="text-white">Already have an account sign in</p>
        {firstnamerequired === true && (
          <p className="text-red-600 font-black">First name is required</p>
        )}
        <input
          type="text"
          placeholder="First name"
          name="firstname"
          value={firstname}
          onChange={(e)=>setFirstname(e.target.value)}
          onBlur={()=>{if(firstnamerequired===null){setFirstnamerequired(false)}}}
          className={firstnamerequired ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"}
          required
        />
        {lastnamerequired === true && (
          <p className="text-red-600 font-black">Last name is required</p>
        )}
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          value={lastname}
          onChange={(e)=>setLastname(e.target.value)}
          onBlur={()=>{if(lastnamerequired===null){setLastnamerequired(false)}}}
          className={lastnamerequired ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"}
          required
        />
        {usernamerequired === true && (
          <p className="text-red-600 font-black">Username is required</p>
        )}
        {usernameexist === true && (
          <p className="text-red-600 font-black">Username is already in use</p>
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          onBlur={()=>{if(usernamerequired===null){setUsernamerequired(false)}}}
          className={
            usernamerequired || usernameexist
              ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"
          }
          required
        />
        {emailrequired === true && (
          <p className="text-red-600 font-black">Email is required</p>
        )}
        {emailmatch === true &&
          emailrequired === false && (
            <p className="text-red-600 font-black">Email is invalid</p>
          )}
        {emailexist === true && (
          <p className="text-red-600 font-black">Email is already in use</p>
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          onBlur={()=>{if(emailrequired===null){setEmailrequired(false)}}}
          className={
            emailrequired ||
            emailmatch ||
            emailexist
              ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"
          }
          required
        />
        {passwordrequired === true && (
          <p className="text-red-600 font-black">Password is required</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          onBlur={()=>{if(passwordrequired===null){setPasswordrequired(false)}}}
          className={passwordrequired ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"}
          required
        />
        {confirmpasswordrequired === true && (
          <p className="text-red-600 font-black">
            Confirm password is required
          </p>
        )}
        {equalpassword === true &&
          confirmpasswordrequired === false && (
            <p className="text-red-600 font-black">Passwords don't matchup</p>
          )}
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm password"
          value={confirmpassword}
          onChange={(e)=>setConfirmpassword(e.target.value)}
          onBlur={()=>{if(confirmpasswordrequired===null){setConfirmpasswordrequired(false)}}}
          className={
            confirmpasswordrequired ||
            (equalpassword && confirmpassword !== "")
              ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"
          }
          required
        />
        <input className="bg-purple text-white p-2 hover:cursor-pointer rounded hover:text-white/80" type="submit" value="Submit" />
      </form>
        </div>
    );
}
export default SignUp;