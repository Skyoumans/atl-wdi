 //requirements: require mongoose
 const mongoose = require('mongoose')
 
 mongoose.Promise = global.Promise;
 
 //create your donut schema:
 const Schema = mongoose.Schema
 
 const donutSchema = new Schema({ 
            name: String,
            description: String,
            img: String,
            price: Number,
            qty: Number
 })
// This is creating a model and saying create a data type within your db called 'donut'
  const donutModel = mongoose.model('donut', donutSchema);
 //export your donut with module.exports()
 
 module.exports = {
     donutModel: donutModel
 }