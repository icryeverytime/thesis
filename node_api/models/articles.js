const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types;
  Mongoose.pluralize(null)

const modelName = "articles";

//Employee Model without any fixed schema
const articleSchema = new Mongoose.Schema({},
  {strict:false }
);
const Articles = Mongoose.model('articles',articleSchema);
/*Creamos el modelo*/
module.exports=Articles;