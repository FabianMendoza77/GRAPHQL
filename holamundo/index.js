'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express()
const port = process.env.port || 3000

// Definir schema inicial.
const schema = buildSchema(`
                type Query {
                    "Retorna un saludo al mundo"
                    hello: String
                }`
)

// Configurar resolvers.
const resolvers = {
    hello: () =>
    {
        return 'Hola Mundo'
    }
}

// Ejecutar el query en la terminal.
// graphql(schema, '{ saludo }', resolvers).then((data) =>
// {
//     console.log(data);
// })

app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () =>
{
    console.log(`server is listening at http://localhost:${port}/api`)
})