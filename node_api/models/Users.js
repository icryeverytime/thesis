const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.pluralize(null)
const usersSchema = new Schema({
    firstname:{
        type:String,
        required: true
    },
	lastname:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    lastfm:{
        type:String
    },
    emailverified:{
        type:String,
        required: true
    },
    code:{
        type:String,
        required: true
    }
});

const Users = mongoose.model('user',usersSchema);
/*Creamos el modelo*/
module.exports=Users;