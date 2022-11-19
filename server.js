const express=require('express');
const app=express();
const cors =require('cors');
const mongoose= require('mongoose');

const port =3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


mongoose.connect('mongodb+srv://sena:sena@cluster0.sesx7zj.mongodb.net/recharge?retryWrites=true&w=majority');

const itemSchema={
    amount:String,
    data: String,
    validity: String,
    description:String
}
const doneSchema={
    mobile:String,
    operator:String,
    amount:String,
    data: String,
    payment: String
    
}
const preSchema={
    mobile:String,
    operator:String,
    amount:String,
    data: String,
    validity:String,
    description:String,
    payment: String
    
}
const Item=mongoose.model("items",itemSchema);
const ItemJio=mongoose.model("jios",itemSchema);
const DoneItem=mongoose.model("postpaiddone",doneSchema);
const PreItem=mongoose.model("prepaiddone",preSchema);

app.listen(port,function (){
     console.log('server started');
});
app.get('/items',(req,res)=>{
    Item.find()
    .then(items=>res.json(items))
    .catch(err=> res.status(400).json('Error: '+err))
});
app.get('/jios',(req,res)=>{
    ItemJio.find()
    .then(items=>res.json(items))
    .catch(err=> res.status(400).json('Error: '+err))
});

app.post('/postpaiddone',(req,res)=>{
    const newItem=new DoneItem(
        {
            mobile:req.body.mobile,
             operator:req.body.operator,
            amount:req.body.amount,
            payment:req.body.payment

        }
    );
    newItem
    .save()
    .then(item=>console.log(item))
    .catch(err=>res.status(400).json("Error"+err));
    
});

app.post('/prepaiddone',(req,res)=>{
    const newItem=new PreItem(
        {
            mobile:req.body.mobile,
            operator:req.body.operator,
            amount:req.body.amount,
            validity:req.body.validity,
            data:req.body.data,
            description:req.body.description,
            payment:req.body.payment

        }
    );
    newItem
    .save()
    .then(item=>console.log(item))
    .catch(err=>res.status(400).json("Error"+err));
    
});
app.get('/prepaiddone',(req,res)=>{
    PreItem.find()
    .then(items=>res.json(items))
    .catch(err=> res.status(400).json('Error: '+err))
});
app.get('/postpaiddone',(req,res)=>{
    DoneItem.find()
    .then(items=>res.json(items))
    .catch(err=> res.status(400).json('Error: '+err))
});