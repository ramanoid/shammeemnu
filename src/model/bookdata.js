const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/libmanapp');
const Schema=mongoose.Schema;

var newbookschema = new Schema({
            title:String,
            author:String,
            year:String

});

var bookdata = mongoose.model('Book-Data',newbookschema); // Book-Data is the new collection

module.exports=bookdata;