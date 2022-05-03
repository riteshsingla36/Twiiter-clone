const router = require("express").Router()
const JWT = require("jsonwebtoken")
const User = require("../Models/userModel")


router.post("/signup", async (req, res) => {
    try {
        const user = await User.create(req.body)
        JWT.sign({ user }, process.env.SECRET, { expiresIn: "10h" }, (err, token) => {
            if (err) {
                res.status(400).send({ error: err.message })
            }
            else {
                res.status(201).send({ token: token, user })
            }
        })
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne(req.body)
        JWT.sign({ user }, process.env.SECRET, { expiresIn: "10h" }, (err, token) => {
            if (err) {
                res.status(400).send({ error: err.message })
            }
            else {
                res.status(200).send({ token: token, user })
            }
        })
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
})

module.exports = router

