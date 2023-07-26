import courseSchema from "./courseSchema.js";

const updateCourses = async (courses) => {
    try {
        await courseSchema.create({
            title: courses.title,
            level: courses.level,
            url: courses.url
        })
        console.log('Data saved in MongoDB')
    } catch (error) {
        console.log('Data is not saved in MongoDB')
        throw error
    }
}

export default updateCourses