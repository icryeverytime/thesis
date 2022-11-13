const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
var url=require('url')
const jwt = require('jsonwebtoken');
const User = require("../node_api/models/Users");
const billboard200 = require("../node_api/models/billboard200");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("ASD12341234");
var cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const billboard100 = require("../node_api/models/billboard100");
const dotenv = require('dotenv');
var LastfmAPI = require('lastfmapi');
var lfm = new LastfmAPI({
	'api_key' : '604024e30367d14d43eda34672a72cf2',
	'secret' : '3cb61d7d9b472fa5b4213ba76a11c338'
});
app.use(cookieParser(process.env.TOKEN_SECRET))
function generateAccessToken(username) {
  return jwt.sign({username}, process.env.TOKEN_SECRET, { expiresIn: '120d' });
}
function authenticateToken(req, res, next) {
  const token = req.cookies["token"]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
    console.log(err)
    return res.sendStatus(200)
    }
    req.user = user
    next()
  })
}
// get config vars
dotenv.config();

/*Conexion a la base de datos de mongo*/
mongoose
  .connect(
    "mongodb+srv://icryeverytime:kC5JEsU4HQifXL2@billboard.fdyddwq.mongodb.net/music?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch((e) => console.log(e));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Content-Security-Policy",
    "script-src 'self' https://apis.google.com"
  );
  next();
});
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "internetcompany68@gmail.com",
    clientId:
      "965546171874-7e227ia6k5begapiu3mhe6bnu57eu7cq.apps.googleusercontent.com",
    clientSecret: "ApCBEdpK8Wp8Uh0am4biRWqS",
    refreshToken:
      "1//04mDIVjFNGsChCgYIARAAGAQSNwF-L9IraXWWN3E-EAtadj2zog8TQIq8mvncyVUBFhtiJgDVuNmKwGX1dbtXW-proPavBC3u0jk",
    accessToken:
      "ya29.a0ARrdaM8N6y0Ch4YYz4kosEeWpcfECFivxKsGqOPWtleSYq4wMYo3ZEDGbUZ4n-WcU3UN-TSqmSxxBJPK2neRfA41q15e0-PuwnjZXN5CadOJjMGZgZD8c-g36c3QQtEVchrPc8n5qkE1a3mpAugxLcx_oudO",
    expires: 1484314697598,
  },
});
app.post('/logout',authenticateToken,(req,res)=>{
  console.log("verificado")
  console.log(req.cookies)
  res.clearCookie("token").send("borrado")
})
app.get('/createtoken', (req, res) => {
  // ...

  const token = generateAccessToken({ username: "chris" });
  res.json(token);

  // ...
});
app.post('/api/userOrders', authenticateToken, (req, res) => {
  // executes after authenticateToken
  // ...
  console.log("token verificado")
  res.send("hola")
})
app.get("/:user/callback",(req,res)=>{
  var user=req.params.user
  var token=url.parse(req.url,true).query.token
  console.log(user)
  console.log(token)
  lfm.authenticate(token,async function(err,session){
    console.log(session.username)
    console.log(session.key)
    let use = await User.findOneAndUpdate({ username: user }, { lastfm: session.username });
    console.log(use)
    res.writeHead(302, {
      location: "http://localhost:3000/thesis#/thesis/User/"+user,
    });
    res.end();

  })

})
app.post("/user",(req,res)=>{
  let usr
  let lastfm
  let flag
  console.log(req.cookies["token"])
  if(req.cookies["token"]!==undefined)
  {
    jwt.verify(req.cookies["token"], process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
      console.log(err)
      flag=false
      }
      else{
        usr = user
        flag=true
      }
    })
  }
  User.findOne({username:req.body["user"]},{email:0,firstname:0,lastname:0,_id:0,username:0,code:0,password:0,emailverified:0},function(err,docs){
    if(err)
    {
      console.log(err)
    }
    else{
      lastfm=docs["lastfm"]
      if(flag===true)
      {
        if(req.body["user"]===usr["username"])
        {
          res.send({"data":{"very":"true","lastfm":lastfm}})
        }
        else{
          res.send({"data":{"very":"false","lastfm":lastfm}})
        }
      }
      else{
        res.send({"data":{"very":"false","lastfm":lastfm}})
      }
    }
  })
})
app.get("/chartingsongs", async function (req, res) {
  try {
    billboard100
      .aggregate([{ $unwind: "$chart.songs" }])
      .sort({ _id: -1, "chart.songs.position.weeksOnChart": -1 })
      .limit(5)
      .exec(function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.send(docs);
        }
      }); //.sort({_id:-1})
  } catch (error) {
    console.log(error);
  }
});
app.get("/chartingalbums", async function (req, res) {
  try {
    billboard200
      .aggregate([{ $unwind: "$chart.songs" }])
      .sort({ _id: -1, "chart.songs.position.weeksOnChart": -1 })
      .limit(5)
      .exec(function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.send(docs);
        }
      }); //.sort({_id:-1})
  } catch (error) {
    console.log(error);
  }
});
app.get("/longestsongs", async function (req, res) {
  try {
    billboard100
      .aggregate([
        { $unwind: "$chart.songs" },
        {
          $group: {
            _id: { title: "$chart.songs.title", cover: "$chart.songs.cover", artist:"$chart.songs.artist" },
            count: { $sum: 1 },
          },
        },
      ])
      .sort({ count: -1 })
      .limit(5)
      .exec(function (err, docs2) {
        if (err) {
          console.log(err);
        } else {
          res.send(docs2);
        }
      }); //.sort({_id:-1})
  } catch (error) {
    console.log(error);
  }
});
app.get("/artistsongsum", async function (req, res) {
  try {
    billboard100
      .aggregate([
        { $unwind: "$chart.songs" },
        {
          $group: {
            _id: { artist: "$chart.songs.artist" },
            count: { $sum: 1 },
          },
        },
      ])
      .sort({ count: -1 })
      .exec(function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.send(docs);
        }
      }); //.sort({_id:-1})
  } catch (error) {
    console.log(error);
  }
});
app.get("/billboard100", async function (req, res) {
  try {
    billboard100
      .findOne({})
      .sort({ _id: -1 })
      .exec(function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.send({ docs });
        }
      });
  } catch (error) {
    console.log(error);
  }
});
app.post("/checklogin",authenticateToken,function(req,res){
  res.send({data:req.user["username"]})
})
app.get("/billboard100week", async function (req, res) {
  try {
    billboard100
      .findOne({}, { "chart.week": 1 })
      .sort({ _id: -1 })
      .exec(function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.send({ docs });
        }
      });
  } catch (error) {
    console.log(error);
  }
});
app.get("/billboard200", async function (req, res) {
  try {
    billboard200
      .findOne({})
      .sort({ _id: -1 })
      .exec(function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          res.send({ docs });
        }
      });
  } catch (error) {
    console.log(error);
  }
});
app.post("/login", async function (req, res) {
  const user = req.body.login.username;
  const contra = req.body.login.contra;
  try {
    User.findOne(
      { $or: [{ username: user }, { email: user }] },
      { emailverified: 1, password: 1,username: 1 },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          if (docs === null) {
            console.log("entered");
            res.send({ message: "username doesn exist", username: "" });
          } else {
            console.log(docs);
            //emailverified: 'false'
            if(docs["emailverified"]==='false')
            {
              res.send({message:"Verify",username:docs["username"]})
            }
            else if (contra === cryptr.decrypt(docs["password"])) {
              let token=generateAccessToken(docs["username"])
              let time=2629800000+ Date.now()
              console.log(token)
              res.cookie("token",token,{httpOnly:true,secure:true,expires:new Date(Date.now()+2629800000000)})
              res.send({ message: "Login", username: docs["username"]});
            } else {
              res.send({ message: "Incorrect password", username: "" });
            }
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});
app.post("/store-data", async function (req, res) {
  let firstname = req.body.user.firstname;
  let lastname = req.body.user.lastname;
  let username = req.body.user.username;
  let email = req.body.user.email;
  let emailverified = "false";
  let password = cryptr.encrypt(req.body.user.password);
  let code = Math.floor(100000 + Math.random() * 900000);
  let body = JSON.parse(
    JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: password,
      emailverified: emailverified,
      code: code,
      lastfm: ""
    })
  );
  try {
    const UserDB = new User(body);
    await UserDB.save();
    res.status(200).send({ message: "inserted" });
    try {
      transporter.sendMail({
        from: "internetcompany68@gmail.com",
        to: email,
        subject: "Verify your email",
        text: "Email verification",
        html:
          '<div style="text-align:center; width: 700px;margin-left: auto; margin-right: auto; border: 1px solid black;"><h2 style="background-color: #0096c7; color: white;">Music Site</h2><p>Hi ' +
          firstname +
          " " +
          lastname +
          "! The last step to your registration <br>is verifying your email with the code below.</p><br><br><p>" +
          code +
          "</p><br><br><p>If you did not request an email verification you can safely ignore this email.</p></div>",
        auth: {
          type: "OAuth2",
          user: "internetcompany68@gmail.com",
          clientId:
            "965546171874-7e227ia6k5begapiu3mhe6bnu57eu7cq.apps.googleusercontent.com",
          clientSecret: "ApCBEdpK8Wp8Uh0am4biRWqS",
          refreshToken:
            "1//04mDIVjFNGsChCgYIARAAGAQSNwF-L9IraXWWN3E-EAtadj2zog8TQIq8mvncyVUBFhtiJgDVuNmKwGX1dbtXW-proPavBC3u0jk",
          accessToken:
            "ya29.a0ARrdaM8N6y0Ch4YYz4kosEeWpcfECFivxKsGqOPWtleSYq4wMYo3ZEDGbUZ4n-WcU3UN-TSqmSxxBJPK2neRfA41q15e0-PuwnjZXN5CadOJjMGZgZD8c-g36c3QQtEVchrPc8n5qkE1a3mpAugxLcx_oudO",
          expires: 1484314697598,
        },
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    const mes = error.message;
    console.log(error.message);
    if (mes.includes("usernameunique")) {
      res.status(200).send({ message: "username duplicate" });
    } else if (mes.includes("myUniqueIndex")) {
      res.status(200).send({ message: "email duplicate" });
    }
  }
});
app.post("/resendcode", async function (req, res) {
  console.log(req.body.verify);
  let user = req.body.verify.username;
  let code = Math.floor(100000 + Math.random() * 900000);
  try {
    let use = await User.findOneAndUpdate({ username: user }, { code: code });
    console.log("use: " + use.email);
    let firstname = use.firstname;
    let email = use.email;
    let lastname = use.lastname;
    console.log(email);
    transporter.sendMail({
      from: "internetcompany68@gmail.com",
      to: email,
      subject: "Verify your email",
      text: "Email verification",
      html:
        '<div style="text-align:center; width: 700px;margin-left: auto; margin-right: auto; border: 1px solid black;"><h2 style="background-color: #0096c7; color: white;">Music Site</h2><p>Hi ' +
        firstname +
        " " +
        lastname +
        "! The last step to your registration <br>is verifying your email with the code below.</p><br><br><p>" +
        code +
        "</p><br><br><p>If you did not request an email verification you can safely ignore this email.</p></div>",
      auth: {
        type: "OAuth2",
        user: "internetcompany68@gmail.com",
        clientId:
          "965546171874-7e227ia6k5begapiu3mhe6bnu57eu7cq.apps.googleusercontent.com",
        clientSecret: "ApCBEdpK8Wp8Uh0am4biRWqS",
        refreshToken:
          "1//04mDIVjFNGsChCgYIARAAGAQSNwF-L9IraXWWN3E-EAtadj2zog8TQIq8mvncyVUBFhtiJgDVuNmKwGX1dbtXW-proPavBC3u0jk",
        accessToken:
          "ya29.a0ARrdaM8N6y0Ch4YYz4kosEeWpcfECFivxKsGqOPWtleSYq4wMYo3ZEDGbUZ4n-WcU3UN-TSqmSxxBJPK2neRfA41q15e0-PuwnjZXN5CadOJjMGZgZD8c-g36c3QQtEVchrPc8n5qkE1a3mpAugxLcx_oudO",
        expires: 1484314697598,
      },
    });
  } catch (error) {
    console.log(error);
  }
});
app.post("/verifyemail", async function (req, res) {
  console.log(req.body);
  let user = req.body.verify.username;
  let code = req.body.verify.code;
  try {
    const usuario = await User.findOne({ username: user });
    console.log(usuario);
    if (usuario.code === code) {
      const update = await User.findByIdAndUpdate(usuario["_id"], {
        emailverified: "true",
      });
      console.log(update);
      console.log("Igual");
      res.status(200).send({ message: "Email verified" });
    } else {
      console.log("Not the same");
      res.status(200).send({ message: "Wrong Code" });
    }
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, (req, res) => {
  console.log("Express api is running on port " + port);
});
