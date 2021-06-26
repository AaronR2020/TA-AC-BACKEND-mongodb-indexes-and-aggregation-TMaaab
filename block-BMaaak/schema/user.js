
userSchema=new Schema({
    name:String,
    username:{type:String,unique:true},
    email:{type:String,unique:true},
    address:{
        city:String,
        state:{type:String,unique:true},
        country:String,
        pin:Number,
    }

});

userSchema.index({state:1,city:1})

module.exports=mongoose.model('User',userSchema)