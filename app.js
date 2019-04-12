// const express=require('express');
// const chal=require('chalk');
// const path=require('path');
// const nav=[
//     {link:'/books',title:'books'}
// ,{link:'/authors',title:"authors"},
// {link:'/podcasts',title:'podcasts'}];

// const bookrouter=require("./src/routes/bookroutes")(nav);
// const autherouter=require(".src/routes/authroutes");

// var app=express();

// app.set('views','./src/views');
// app.set('view engine','ejs');

// app.use(express.static(path.join(__dirname,"/public")));
// app.use('/authors',autherouter);    
// app.use('/books',bookrouter); 

// app.get('/',(req,res)=>{
//     res.render('index',{vale:"library"},nav);
//     console.log(chal.green('fghdfgh'));
// }).listen(8754);





// //  app.get('/',function(req,res){
// //  res.send("helloworld");
// //  console.log(chalk.red('listening at')+chalk.green('8181'));

const a=require("express")
const chalk=require("chalk") 
const path=require("path")
var app=a();

var nav=[
    {link:'/books',title:"Books"},
    {link:'/authors',title:"Authors"},
    {link:'/addbook',title:'login'}];
 const booksrouter=require('./src/routes/bookroutes')(nav);
 const adminrouter=require('./src/routes/adminroutes')(nav);
app.set('views','./src/views');
app.set('view engine','ejs');
app.use(a.static(path.join(__dirname,"/public")));

app.use('/books',booksrouter)
app.use('/addbook',adminrouter)
app.get('/',(req,res)=>{
    res.render('index',{nav,
        title:"library"});
});
app.listen(3000,()=>{
    console.log("listening to the port"+chalk.cyan('3000'));
});


