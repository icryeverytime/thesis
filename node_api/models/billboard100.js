const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types;
  Mongoose.pluralize(null)

const modelName = "billboard100";

//Employee Model without any fixed schema
const billboardSchema = new Mongoose.Schema({},
  {strict:false }
);
module.exports = Mongoose.model(modelName,billboardSchema );