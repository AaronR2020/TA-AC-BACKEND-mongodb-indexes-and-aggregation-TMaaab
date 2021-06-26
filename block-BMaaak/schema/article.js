
articleSchema=new Schema({
 title:String,
 description:String,
 tags:[String]

});

articleSchema.index({tags:1});
articleSchema.index({title:'text'});
articleSchema.index({description:'text',title:'text'});

module.exports=mongoose.model('Article',articleSchema)