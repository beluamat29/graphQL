import express from "express"
import graphqlHTTP from "express-graphql"
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'tu vieja'})
})
app.use('/graphql', graphqlHTTP({
    //Utiliza graphqlHTTP oara procesar esa ruta
    graphiql: true,
    //UI para request (vendria a ser como postman)
    schema: schema
}))
app.listen(3000, () => console.log('server running on port 3000'))