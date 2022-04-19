'use strict'

const connectDb = require('./db');
module.exports = {
    createCourse: async (root, { input }) =>
    {
        let db
        let course

        try
        {
            db = connectDb()
            course = await db.collection('courses').insertOne(input)
            input._id = course.insertedId

        } catch (error)
        {
            console.error(error)
        }

        return input
    }
}