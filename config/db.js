const mongoose = require("mongoose");
const config = require("config");
const db = config.get("MONGOURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify:false
    });
    console.log("mongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
