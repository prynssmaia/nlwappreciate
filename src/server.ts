import "reflect-metadata"
import express from "express"
import { router } from "./routes"

import "./database"

const app = express()

app.use(express.json())

app.use(router)

app.listen(4576, () => console.log("Server is running at localhost:4576"))