let mongoose = require("mongoose");
let connect = () => {
  return mongoose.connect("mongodb://localhost/27017/newapp");
};
module.exports = connect;
