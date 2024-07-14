import { getFunctions, httpsCallable } from "firebase/functions";
'firebase/functions'

const functions = getFunctions();

const generateUploadUrl = httpsCallable(functions, "generateUploadUrl");

export async function uploadVideo(file:File){
    const respone: any = await generateUploadUrl({fileExtension: file.name.split(".").pop()});  

    //upload the file to the signed URL
    const uploadResult = await fetch(respone?.data?.url, {
        method: "PUT",
        body: file,
        headers: {
            "Content-Type": file.type,
        },
    });

    return uploadResult;
}
