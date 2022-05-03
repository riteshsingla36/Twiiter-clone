const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const postController = require("./Controllers/postController")
const userController = require("./Controllers/userController")
const commentController = require("./Controllers/commentController")

const app = express()

dotenv.config({ path: "./.env" })

const connect = () => mongoose.connect(process.env.DB_URI)

app.use(cors())
app.use(express.json())

app.use("/post", postController)
app.use("/user", userController)
app.use("/comment", commentController)

app.listen(process.env.PORT, async () => {
    await connect()
    console.log("server connected successfully")
})