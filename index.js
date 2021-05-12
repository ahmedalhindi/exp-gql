const express = require("express")
const {buildSchema} = require('graphql')
const { graphqlHTTP } = require('express-graphql');

const typeDefs = require('./schema')
const db = require("./db")

const app = express()
const port = 3000

const schema = buildSchema(typeDefs)
const resolvers = require('./resolvers/resources')

// ping
app.get("/ping", (req, res) => {
  res.send("pong")
})

// route
app.use("/r", require("./routes/resource"))

// connect to db
db()

// gql
app.use('/gql',graphqlHTTP({
  schema,
  rootValue:resolvers,
  graphiql: true,

}))


app.listen(port, () => {
  console.log(`Express listening at http://localhost:${port}`)
})
