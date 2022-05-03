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

const queries = require('./queries')
const mutations = require('./mutations')
const types = require('./types')

module.exports = {
    Query: queries,
    Mutation: mutations,
    ...types
}

// module.exports = {
//     hello: () =>
//     {
//         return 'Hola Mundo'
//     }
// }