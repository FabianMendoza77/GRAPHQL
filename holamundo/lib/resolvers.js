'use strict'

// const courses = [
//     {
//         _id: 'anyid',
//         title: 'myTitle',
//         teacher: 'myTeacher',
//         description: 'myDescrip',
//         topic: 'myTopic'
//     },
//     {
//         _id: 'anyid2',
//         title: 'myTitle2',
//         teacher: 'myTeacher2',
//         description: 'myDescrip2',
//         topic: 'myTopic2'
//     },
//     {
//         _id: 'anyid3',
//         title: 'myTitle3',
//         teacher: 'myTeacher3',
//         description: 'myDescrip3',
//         topic: 'myTopic3'
//     }
// ]

const connectDb = require('./db')
const { ObjectId } = require('mongodb')

module.exports = {
    Query: {
        getCourses: async () =>
        {
            let db
            let courses = []
            try
            {
                db = await connectDb()
                courses = await db.collection('courses').find().toArray()
            } catch (error)
            {
                console.error(error)
            }

            return courses
        },
        getCourse: async (root, { id }) =>
        {
            // const course = courses.filter(course => course._id === args.id)
            // return course.pop()

            let db
            let course
            try
            {
                db = await connectDb()
                course = await db.collection('courses').findOne({ _id: ObjectId(id) })
            } catch (error)
            {
                console.error(error)
            }

            return course
        }
    }
}

// module.exports = {
//     hello: () =>
//     {
//         return 'Hola Mundo'
//     }
// }