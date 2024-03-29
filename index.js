
import express from "express";
import axios from "axios";



const app = express()
const port =10000;
app.use(express.static("public"));


app.get("/",async(req,res)=>{
    try{

        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs",
        {
            secret:result.data.secret,
            user: result.data.username,
        });
    }
    catch(error){
        console.error(error.response.data);
        res.status(500).send("failed to fetch activity");
    }
    

});
app.listen(port,
    console.log(`Server live and runing on ${port}.`))
