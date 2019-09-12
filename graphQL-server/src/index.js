import express from "express"
import graphqlHTTP from "express-graphql"
import schema from './schema'

const app = express();

app.get('/', (req, res) => {
})

app.use('/graphql', graphqlHTTP({
    //Utiliza graphqlHTTP oara procesar esa ruta
    graphiql: true,
    schema: schema
}))

app.listen(3000, () => console.log('server running on port 3000'))