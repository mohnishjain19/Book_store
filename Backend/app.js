var express=require('express');
var mongoose=require('mongoose');
const router=require("./routes/book-routes");
const cors=require('cors');
const app=express();
// tj8pLRiY2B1vU8Zf-Password mongoose

//Mioddlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);

// app.use('/',(req,res,next)=>{
//     res.send("This is our starting app");

// });


mongoose.connect("mongodb+srv://admin:tj8pLRiY2B1vU8Zf@cluster0.i9wjl.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connected to database"));
// .then(()=>{
// }).catch((err)=>console.log(err));

app.listen(process.env.PORT ||5000,() =>{
    console.log("Server Running on 5000");

})

