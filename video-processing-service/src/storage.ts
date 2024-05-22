import { Storage } from "@google-cloud/storage";
import fs from "fs";
import Ffmpeg from "fluent-ffmpeg";

const storage = new Storage();

const rawVideoBucketName = "nc2107-yt-raw-videos";
const processVideoBucketName = "nc2107-yt-processed-videos";

const localRawVideoPath = "./raw-videos";
const localProcessedVideoPath = "./processed-videos";

//create the local directories for raw and processed videos
export function setupDirectories() {}

export function convertVideo(rawVideoName: string, processedVideoName: string) {
  ffmpeg(`${localRawVideoPath}/${rawVideoName}`)
    .outputOption("-vf", "scale =-1:360")
    .on("end", () => {
      console.log("Processing finished sucessful.");
    })
    .on("error", (err) => {
      console.log(`Ane error occurred: ${err.message}`);
      res.status(500).send(`Internal Server Error: ${err.message}`);
    })
    .save(`${localProcessedVideoPath}/${processedVideoName}`);
}
