'use strict'

require('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000
const isDev = process.env.NODE_ENV !== 'production '

// Definir schema inicial.
// const schema = buildSchema(`
// type Query {
//     "Retorna un saludo al mundo"
//     hello: String
// }`)
const typeDefs = readFileSync(
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
)

const schema = makeExecutableSchema(
    { typeDefs, resolvers }
)

// Configurar resolvers.
// const resolvers = {
//     hello: () =>
//     {
//         return 'Hola Mundo'
//     }
// }

// Ejecutar el query en la terminal.
// graphql(schema, '{ saludo }', resolvers).then((data) =>
// {
//     console.log(data);
// })

// La api se deja abierta, pero se puede restringir el acceso a ciertos host
app.use(cors())

app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: isDev
}))

app.listen(port, () =>
{
    console.log(`server is listening at http://localhost:${port}/api`)
})
