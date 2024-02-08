const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientrouter=require("./controllers/patientRouter")

const app=express()


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://aleena2681:alee@cluster0.okresfv.mongodb.net/patientDb?retryWrites=true&w=majority");
app.use("/api/patient",patientrouter)

app.listen(3001,()=>{
    console.log("server running")
})


