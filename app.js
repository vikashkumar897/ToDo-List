const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const { request, response } = require("express");

const items=["Bye Food", "Cook food", "Eat food"];
const workItems=[];

const app=express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');

app.get("/",function(req,res){
    
    let day=date.getDate();
    var btn_text="Work List"
    var linkRefer="http://localhost:3000/work"
    res.render("list",{listTitle:day,toDoNewItem:items,btn_text:btn_text,linkRefer:linkRefer});
})

app.post("/",function(req,res){
    let item = req.body.toDoItem;
    if (req.body.list==="Work List "){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work",function(req,res){
    var btn_text="Main List"
    var linkRefer="http://localhost:3000"
    res.render("list",{listTitle:"Work List",toDoNewItem:workItems,btn_text:btn_text,linkRefer:linkRefer});
})

app.post("/work",function(req,res){
    let item = req.body.toDoItem;
    workItems.push(item);
    res.redirect("/work");
})



app.listen(3000,function(){
    console.log("Server has started at 3000..")
})