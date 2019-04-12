const a=require("express");
const booksrouter=a.Router();
const bookdata=require('../model/bookdata')

function Router(nav){
// booksrouter
// booksrouter.route('/')
// .get((req,res)=>{
//     res.render('books',{nav,title:"Books",
//     books})
// })
booksrouter.route('/')
.get((req,res)=>{
    bookdata.find()
     .then(function(books){
         res.render('books',{nav,title:"libman",books});
     }
 
    );
    
});
booksrouter.route('/:id')
.get((req,res)=>{
    const id =req.params.id;
    bookdata.findOne({_id:id})
     .then(function(book){
         res.render('book',{nav,title:"libman",book});
     })});
   
   
    // res.render(
    //     'book',
    //     {
    //         nav,
    //         title:'Library',
    //         book: books[id]
    //     });
return booksrouter;
};
module.exports=Router;