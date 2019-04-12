const a=require("express")
const adminrouter=a.Router();
const bookdata = require('../model/bookdata')
function Router(nav){
   
adminrouter.route('/')
.get((req,res)=>{
    res.render('addbook',{nav,title:"ADMIN PANEL",
    })
});

adminrouter.route('/add')
    .get((req,res)=>{
        var item={
        title: req.param('title'),
        author: req.param('author'),
        year: req.param('year')
        }  
            // res.send("<h1>inserting books</h1>");
    
    var book = new bookdata(item);
    book.save();
    res.redirect('/books');
});




return adminrouter;
}
module.exports=Router;