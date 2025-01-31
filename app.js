import express from "express"
import cors from "cors"

const app =express()
const port=4000

app.use(cors())


app.get("/",(req,res)=>{
    res.json({
      email: "dorcasibrahim667gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/dorcax/HngFirstTask",
    });
})

app.listen(port,()=>{
    console.log(`app running on port ${port}` )
})