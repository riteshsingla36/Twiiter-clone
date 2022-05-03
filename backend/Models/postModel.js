const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }

},
    {
        versionKey: false,
        timestamps: true
    }
)

const Post = mongoose.model("post", postSchema)

module.exports = Post