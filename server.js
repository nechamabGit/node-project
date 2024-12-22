const express=require('express')
const app=express()
const PORT= 1034
app.use(log)
app.get('/1',log,(req,res)=>{
res.send("hello")
})

app.get('/2',log,(req,res)=>{
    res.send("route 2")
})

app.get('/3',log,(req,res)=>{
    res.send("route 3")
})

app.get('/4',log,(req,res)=>{
    res.send("route 4")
})



app.listen(PORT,()=>{
    console.log(`it running in port ${PORT}`)
})