import express from "express"
import graphql from "express-graphql"
const app = express();

const schema  = {};

app.use('/graphql', graphql({
    graphiql: true,
    schema: schema
}))
app.listen(3000, () => console.log('server running on port 3000'))