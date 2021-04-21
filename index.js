import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './controller/controller.js';
const app = express();

app.use(cors());

app.use(bodyParser.json());


//database
mongoose.connect(`mongodb+srv://admin:iIS2GfkQsaJX0jIU@cluster0.ejuxc.mongodb.net/demo?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log(`db connected`);
});
app.use('/',router);
app.use('/login',(req,res)=>{
    res.json({token:'access123'})
});



app.listen('2000',()=>{
    console.log(`Server is running on port 2000`)
})