const authenticator = require("../Middleware.js/authMiddleware")
const Post = require("../Models/postModel")

const router = require("express").Router()


router.get("/", authenticator, async (req, res) => {
    var q = {}
    if (req.query.user) {
        q.user = req.query.user
    }
    try {
        const posts = await Post.find(q)
        res.status(200).send(posts)
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

router.get("/:id", authenticator, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).send(post)
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

//pending single user posts

router.post("/", authenticator, async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).send(post)
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

router.patch("/:id", authenticator, async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send(post)
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

router.delete("/:id", authenticator, async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.status(200).send({})
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})



module.exports = router