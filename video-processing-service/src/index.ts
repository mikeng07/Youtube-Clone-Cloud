import express from "express";

const app = express(); 
const port = 3000;

//route handler 
//when end point is called

app.get("/", (req, res) =>{
    res.send("Hello World! ");
});


//launching express app server and logging out message
//callback function 
app.listen(port, () => {
    console.log(`Video processing service listening at http://localhost:${port}`);
})

