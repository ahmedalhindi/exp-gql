const { Resource } = require("../models/resourse")
module.exports = {
    ping: () => "pong",
    resource: () => {
      return { _id: "1", field: "1234" }
    },
    getResources: async () => {
      res = await Resource.find()
      return res
    },
    postResource: async ({field}) => {
      let resource = new Resource({
        field
      })
      await resource.save()
      return resource
    },
}
