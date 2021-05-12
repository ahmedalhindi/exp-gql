const mongoose = require("mongoose");

const resourceSchema  = new mongoose.Schema({
field:String
});

const Resource = mongoose.model("Resource", resourceSchema);

exports.Resource = Resource;
exports.resourceSchema = resourceSchema;
