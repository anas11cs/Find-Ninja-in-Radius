const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// create geolocation schema
const GeoSchema=new Schema({
  type:{
    type:String,
    default:"Point"
  },
  coordinates:{
    type:[Number],
    index:"2dsphere"
  }
});

// create ninja schema and model
// schema
const ninjaSchema=new Schema({

  name:{
    type:String,
    required:[true,"Name Field is Required"]
  },
  rank:{
    type:String,
  },
  available:{
    type:Boolean,
    default:false
  },
  geometry:GeoSchema
  // add in geo location
});
// model
const Ninja=mongoose.model('ninja',ninjaSchema);
// 1st paramenter is name of model/table and then the scehma or structure in that model/table
module.exports=Ninja;
