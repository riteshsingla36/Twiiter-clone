const JWT = require('jsonwebtoken')

const authenticator = async (req, res, next) => {
    var token = req.headers["token"]
    if (token) {
        JWT.verify(token, process.env.SECRET, (err, valid) => {
            if (err) {
                res.status(400).send({ error: err.message })
            }
            else {
                next()
            }
        })

    }
    else {
        res.status(400).send({ error: "only authorised person can access this data" })
    }
}

module.exports = authenticator