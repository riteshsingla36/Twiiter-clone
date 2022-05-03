const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    password: {
        type: String
    },
    bookmarks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }]
},
    {
        versionKey: false,
        timestamps: true
    }
)

const User = mongoose.model("user", userSchema)

module.exports = User