const router = require("express").Router()
const JWT = require("jsonwebtoken")
const User = require("../Models/userModel")
const bcrypt = require("bcrypt")


router.post("/signup", async (req, res) => {
    const { firstname, lastname, email, image, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    if (!hashedPassword) {
        return res.json({ status: false, msg: "Error generating hashed password, please try again" })
    }

    try {
        const user = await User.create({ firstname, lastname, email, image, password: hashedPassword })


        JWT.sign({ user }, process.env.SECRET, { expiresIn: "10h" }, (err, token) => {
            if (err) {
                return res.json({ status: false, msg: err.message })
            }
            else {
                return res.json({ status: true, user: user, token: token })
            }
        })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ status: false, msg: "email or password is incorrect" })
        }
        if (user.password !== password) {
            return res.json({ status: false, msg: "email or password is incorrect" })
        }

        JWT.sign({ user }, process.env.SECRET, { expiresIn: "10h" }, (err, token) => {
            if (err) {
                return res.json({ status: false, msg: err.message })
            }
            else {
                return res.json({ status: true, user: user, token: token })
            }
        })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.patch("/:id", async (req, res) => {
    const { image, bookmark } = req.query
    try {
        let user = await User.findById(req.params.id)
        let bookmarks = []
        if (bookmark) {
            bookmarks = [...user.bookmarks, bookmark]
            user = await User.findByIdAndUpdate(req.params.id, { bookmarks }, { new: true })
            return res.json({ status: true, user: user })
        }

        user = await User.findByIdAndUpdate(req.params.id, { image }, { new: true })
        return res.json({ status: true, user: user })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

module.exports = router

