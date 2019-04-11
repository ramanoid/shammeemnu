const express=require('express');
const chal=require('chalk');
const path=require('path');
var app=express();
const bookrouter=express.Router();
app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"/public")));
app.get('/',(req,res)=>{
     res.render('index',{vale:"library",nav:[
         {link:'/books',title:'books'}
     ,{link:'/authors',title:"authors"},
     {link:'/podcasts',title:'podcasts'}]});
     console.log(chal.green('fghdfgh'));
 }).listen(8754);
//  app.get('/',function(req,res){
//  res.send("helloworld");
//  console.log(chalk.red('listening at')+chalk.green('8181'));
bookrouter.route('/')
    .get((req,res)=>{
        res.send("halla");
    });

app.use('/books',bookrouter);    
bookrouter.route('/single')
    .get((req,res)=>{
        res.send("dfgh  no book");
    });


