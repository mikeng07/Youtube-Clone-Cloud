import express from "express";
//wrapper around ffmpeg 
import ffmpeg from "fluent-ffmpeg";

const app = express(); 
app.use(express.json());


//route handler 
//when end point is called

app.post("/process-video", (req, res) =>{
    //Get path of input video file from the request body
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath;

    //handling technique
    if (!inputFilePath || !outputFilePath)
    {
        res.status(400).send("Bad Request: Missing file path. ");
        //400 is client error 
    }

        //converting video to 360 resolution 
        ffmpeg(inputFilePath)
        .outputOptions("-vf", "scale = -1:360")
        //run either 200 level code or 500 level code 
        .on("end", () =>{
            //run this callback function 

        return res.status(200).send("Processing finished successfully. ")
    
        })
        .on("error", (error) =>{
            //run another handling
            console.log(`An error occurred: ${error.message}`);
            return res.status(500).send(`Internal Server Error ${error.message}`); 
            //this mean there is some internal error
            // eg. run out of memory 
        })
        //assume that everything works
        .save(outputFilePath);
        

});


//launching express app server and logging out message
//callback function 
const port = process.env.PORT || 3000; 
//standard way to provide the port at runtime
app.listen(port, () => {
    console.log(`Video processing service listening at http://localhost:${port}`);
})



