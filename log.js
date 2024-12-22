const fs=require("fs")
const path=require("path")
const {format}=require("date-fns")
const {v4}= require("uuid")



const log=(req,res,next)=>{
    fs.appendFile(path.join(__dirname,'custom_middleware.txt'),
    `${req.method,req.headers.origion,req.path,v4()}`,(err)=>{
        if(err) throw err;
        console.log("AppendFile File Complete you are very smart")
    })
    next();
}

