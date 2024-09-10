import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        min: 3,
        max: 150,
        trim: true
    },
    title: {
        type: String,
        required: true,
        min: 3,
        max: 150,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now  // Kullanıcı oluşturulduğunda otomatik olarak eklenir
    }

})

export default mongoose.model("Post", PostSchema);