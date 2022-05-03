const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    body: {
        type: String,
        require: true
    },
    likes: {
        type: Number,
        default: 0
    },
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }

},
    {
        versionKey: false,
        timestamps: true
    }
)

const Comment = mongoose.model("comment", commentSchema)

module.exports = Comment