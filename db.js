const mongoose = require("mongoose")

const uri = "mongodb://localhost/exp-gql"

module.exports = () =>
  mongoose
    .connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(console.log("db connected"))
