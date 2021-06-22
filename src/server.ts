import "reflect-metada"
import express from "express"

import "./database"

const app = express()

app.get("/", (req,res) => {
    return res.send("Hello NLW NODE")
})

app.post("/post", (req,res) => {
    return res.send("hello nlw post")
})

app.listen(4576, () => console.log("Server is running at localhost:4576"))