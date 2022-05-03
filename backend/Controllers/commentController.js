const authenticator = require("../Middleware.js/authMiddleware")
const Comment = require("../Models/commentModel")

const router = require("express").Router()


router.get("/", authenticator, async (req, res) => {
    var q = {}
    if (req.query.post) {
        q.post = req.query.post
    }
    try {
        const comments = await Comment.find(q)
        res.status(200).send(comments)
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

router.get("/:id", authenticator, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        res.status(200).send(comment)
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

router.post("/", authenticator, async (req, res) => {
    try {
        const comment = await Comment.create(req.body)
        res.status(200).send(comment)
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

router.patch("/:id", authenticator, async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send(comment)
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})

router.delete("/:id", authenticator, async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id)
        res.status(200).send({})
    }
    catch (err) {
        res.status(404).send({ error: err.message })
    }
})



module.exports = router