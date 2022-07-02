const express=require('express')
const app=express();
const cors=require('cors');
const port=3001;
const User=require('../node_api/models/Users');
const Cryptr=require('cryptr');
const cryptr=new Cryptr('ASD12341234');
const mongoose = require('mongoose');
const nodemailer=require('nodemailer');

/*Conexion a la base de datos de mongo*/
mongoose.connect('mongodb://localhost:27017/music',{useNewUrlParser:true,useUnifiedTopology:true})
                .then(()=>console.log('Base de datos conectada correctamente'))
                .catch(e=>console.log(e));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    next();
});
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'internetcompany68@gmail.com',
        clientId: '965546171874-7e227ia6k5begapiu3mhe6bnu57eu7cq.apps.googleusercontent.com',
        clientSecret: 'ApCBEdpK8Wp8Uh0am4biRWqS',
        refreshToken: '1//04mDIVjFNGsChCgYIARAAGAQSNwF-L9IraXWWN3E-EAtadj2zog8TQIq8mvncyVUBFhtiJgDVuNmKwGX1dbtXW-proPavBC3u0jk',
        accessToken: 'ya29.a0ARrdaM8N6y0Ch4YYz4kosEeWpcfECFivxKsGqOPWtleSYq4wMYo3ZEDGbUZ4n-WcU3UN-TSqmSxxBJPK2neRfA41q15e0-PuwnjZXN5CadOJjMGZgZD8c-g36c3QQtEVchrPc8n5qkE1a3mpAugxLcx_oudO',
        expires: 1484314697598
    }
  });
app.post('/store-data',async function(req,res){
    let firstname=req.body.user.firstname;
    let lastname=req.body.user.lastname;
    let username=req.body.user.username;
    let email=req.body.user.email;
    let password=cryptr.encrypt(req.body.user.password);
    let emailverified="false";
    let code=Math.floor(100000 + Math.random() * 900000);
    let body=JSON.parse(JSON.stringify({"firstname":firstname,"lastname":lastname,"email":email,"username":username,"password":password,"emailverified":emailverified,"code":code}))
    console.log("entered");
    try{
        const UserDB=new User(body);
        await UserDB.save();
        res.status(201).send({ message: "inserted" });
        try{
            transporter.sendMail({
                from: 'internetcompany68@gmail.com',
                to: email,
                subject: 'Verify your email',
                text: 'Email verification',
                html: '<div style="text-align:center; width: 700px;margin-left: auto; margin-right: auto; border: 1px solid black;"><h2 style="background-color: #0096c7; color: white;">Music Site</h2><p>Hi '+firstname+' '+lastname+'! The last step to your registration <br>is verifying your email with the code below.</p><br><br><p>'+code+'</p><br><br><p>If you did not request an email verification you can safely ignore this email.</p></div>', 
                auth: {
                  type: 'OAuth2',
                  user: 'internetcompany68@gmail.com',
                  clientId: '965546171874-7e227ia6k5begapiu3mhe6bnu57eu7cq.apps.googleusercontent.com',
                  clientSecret: 'ApCBEdpK8Wp8Uh0am4biRWqS',
                  refreshToken: '1//04mDIVjFNGsChCgYIARAAGAQSNwF-L9IraXWWN3E-EAtadj2zog8TQIq8mvncyVUBFhtiJgDVuNmKwGX1dbtXW-proPavBC3u0jk',
                  accessToken: 'ya29.a0ARrdaM8N6y0Ch4YYz4kosEeWpcfECFivxKsGqOPWtleSYq4wMYo3ZEDGbUZ4n-WcU3UN-TSqmSxxBJPK2neRfA41q15e0-PuwnjZXN5CadOJjMGZgZD8c-g36c3QQtEVchrPc8n5qkE1a3mpAugxLcx_oudO',
                  expires: 1484314697598
                }
                });
        }catch(error)
        {
            console.log(error)
        }
    }catch(error){
        const mes=error.message;
        console.log(error.message);
        if(mes.includes("duplicate key error collection: music.user index: username_1"))
        {
            res.status(409).send({message: "username duplicate"});
        }
        else if(mes.includes("duplicate key error collection: music.user index: email_1"))
        {
            res.status(409).send({message: "email duplicate"})
        }
    }
})
app.post('/verifyemail', async function(req,res){
    console.log(req.body);
    let user=req.body.verify.username;
    let code=req.body.verify.code;
    try{
        const usuario=await User.findOne({username:user})
        console.log(usuario);
        if(usuario.code===code)
        {
            console.log("Igual");
        }
    }catch(error)
    {
    }
})
app.listen(port,(req,res)=>{
    console.log("Express api is running on port 6000");
})