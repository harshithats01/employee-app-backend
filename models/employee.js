const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "empcode":{type:String,required:true},
        "name":{type:String,required:true},
        "designation":{type:String,required:true},
        "dob":{type:String,required:true},
        "salary":{type:String,required:true}

    }
)

let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}