const express=require("express")

const server=express()


server.get("/",(req,res)=>{

    res.send({
        product1:"mobile"
    })

})


server.listen(8080,()=>{
    console.log("server is running 8080");
})

