import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: String,
    level: String,
    url: String
})

export default mongoose.model('courses', courseSchema)