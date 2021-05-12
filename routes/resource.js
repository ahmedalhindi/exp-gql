const router = require("express").Router()
const { Resource } = require("../models/resourse")

router.get("/", async (req, res) => {
  const resource = await Resource.find({})

  res.status(200).send(resource)
})

module.exports = router
