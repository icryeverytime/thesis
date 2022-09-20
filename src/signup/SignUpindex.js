import React from "react";
import validator from "validator";
import Swal from "sweetalert2";
import './animation.css'
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      firstnamerequired: false,
      lastnamerequired: false,
      usernamerequired: false,
      usernameexist: false,
      emailrequired: false,
      emailexist: false,
      passwordrequired: false,
      confirmpasswordrequried: false,
      equalpassword: false,
      emailmatch: false,
      formvalid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  secondchange = (event) => {
    this.handleChange(event);
    if (
      event.target.getAttribute("name") === "confirmpassword" &&
      this.state.confirmpasswordrequried !== ""
    ) {
      if (event.target.value !== this.state.password) {
        this.setState({ equalpassword: true });
      } else {
        this.setState({ equalpassword: false });
      }
    }
    if (
      event.target.getAttribute("name") === "password" &&
      this.state.confirmpasswordrequried !== ""
    ) {
      if (event.target.value !== this.state.confirmpassword) {
        this.setState({ equalpassword: true });
      } else {
        this.setState({ equalpassword: false });
      }
    }
    if (
      event.target.getAttribute("name") === "email" &&
      this.state.emailrequired === false
    ) {
      if (validator.isEmail(event.target.value)) {
        this.setState({ emailmatch: false });
      } else {
        this.setState({ emailmatch: true });
      }
    }
    this.validateform();
  };

  handleChange(event) {
    this.setState({ [event.target.getAttribute("name")]: event.target.value });
    if (event.target.getAttribute("name") === "firstname") {
      if (event.target.value === "") {
        this.setState({ firstnamerequired: true });
      } else {
        this.setState({ firstnamerequired: false });
      }
    } else if (event.target.getAttribute("name") === "lastname") {
      if (event.target.value === "") {
        this.setState({ lastnamerequired: true });
      } else {
        this.setState({ lastnamerequired: false });
      }
    } else if (event.target.getAttribute("name") === "username") {
      this.setState({ usernameexist: false });
      if (event.target.value === "") {
        this.setState({ usernamerequired: true });
      } else {
        this.setState({ usernamerequired: false });
      }
    } else if (event.target.getAttribute("name") === "email") {
      this.setState({ emailexist: false });
      if (event.target.value === "") {
        this.setState({ emailrequired: true });
      } else {
        this.setState({ emailrequired: false });
      }
      if (validator.isEmail(event.target.value)) {
        this.setState({ emailmatch: false });
      }
    } else if (event.target.getAttribute("name") === "password") {
      if (event.target.value === "") {
        this.setState({ passwordrequired: true });
      } else {
        this.setState({ passwordrequired: false });
      }
      if (
        this.state.confirmpassword !== "" &&
        this.state.confirmpassword !== this.state.password
      ) {
        this.setState({ equalpassword: true });
      } else {
        this.setState({ equalpassword: false });
      }
    } else if (event.target.getAttribute("name") === "confirmpassword") {
      if (event.target.value === "") {
        this.setState({ confirmpasswordrequired: true });
      } else {
        this.setState({ confirmpasswordrequired: false });
      }
    }
    this.validateform();
  }
  validateform = () => {
    if (
      this.state.email !== "" &&
      this.state.firstname !== "" &&
      this.state.lastname !== "" &&
      this.state.email !== "" &&
      this.state.username !== "" &&
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.confirmpassword !== ""
    ) {
      if (
        this.state.emailmatch === false &&
        this.state.confirmpassword === this.state.password
      ) {
        this.setState({ formvalid: true });
      } else {
        this.setState({ formvalid: false });
      }
    } else {
      this.setState({ formvalid: false });
    }
  };
  trouble() {
    console.log("trouble");
  }
  async send(aux) {
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
            username: this.state.username,
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
              username: this.state.username,
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
  handleSubmit = (event) => {
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
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
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
  render() {
    return (
        <div className="pt-20 pb-10 h-screen" id="css-selector">
            <form
        className="flex flex-col justify-center items-center pt-5 pb-5 xs:mx-12 sm:mx-28 md:mx-48 lg:mx-64 xl:mx-80 2xl:mx-96 rounded bg-dodger-blue shadow-2xl drop-shadow-2xl"
        onSubmit={this.handleSubmit}
      >
        <h1 className="text-white text-2xl">Register an account</h1>
        <p className="text-white">Already have an account sign in</p>
        {this.state.firstnamerequired === true && (
          <p className="text-red-600 font-black">First name is required</p>
        )}
        <input
          type="text"
      
          placeholder="First name"
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleChange}
          onBlur={this.handleChange}
          
          className={this.state.firstnamerequired ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"}
          required
        />
        {this.state.lastnamerequired === true && (
          <p className="text-red-600 font-black">Last name is required</p>
        )}
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          value={this.state.lastname}
          onChange={this.handleChange}
          onBlur={this.handleChange}
          className={this.state.lastnamerequired ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"}
          required
        />
        {this.state.usernamerequired === true && (
          <p className="text-red-600 font-black">Username is required</p>
        )}
        {this.state.usernameexist === true && (
          <p className="text-red-600 font-black">Username is already in use</p>
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
          onBlur={this.handleChange}
          className={
            this.state.usernamerequired || this.state.usernameexist
              ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"
          }
          required
        />
        {this.state.emailrequired === true && (
          <p className="text-red-600 font-black">Email is required</p>
        )}
        {this.state.emailmatch === true &&
          this.state.emailrequired === false && (
            <p className="text-red-600 font-black">Email is invalid</p>
          )}
        {this.state.emailexist === true && (
          <p className="text-red-600 font-black">Email is already in use</p>
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          onBlur={this.secondchange}
          className={
            this.state.emailrequired ||
            this.state.emailmatch ||
            this.state.emailexist
              ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"
          }
          required
        />
        {this.state.passwordrequired === true && (
          <p className="text-red-600 font-black">Password is required</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.secondchange}
          onBlur={this.secondchange}
          className={this.state.passwordrequired ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"}
          required
        />
        {this.state.confirmpasswordrequired === true && (
          <p className="text-red-600 font-black">
            Confirm password is required
          </p>
        )}
        {this.state.equalpassword === true &&
          this.state.confirmpasswordrequired === false && (
            <p className="text-red-600 font-black">Passwords don't matchup</p>
          )}
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm password"
          value={this.state.confirmpassword}
          onChange={this.secondchange}
          onBlur={this.secondchange}
          className={
            this.state.confirmpasswordrequired ||
            (this.state.equalpassword && this.state.confirmpassword !== "")
              ? "border-4 border-red-600 w-56 h-8 p-0 my-2.5 text-center" : "w-56 h-8 p-0 my-2.5 text-center"
          }
          required
        />
        <input className="bg-purple text-white p-2 hover:cursor-pointer rounded hover:text-white/80" type="submit" value="Submit" />
      </form>
        </div>
    );
  }
}
export default SignUp;
