import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

try {
  await mongoose.connect(uri + "/Infos");
} catch (err) {
  console.log(err);
}

mongoose.connection.on("error", (err) => {
  console.log(err);
});

mongoose.connection.on("disonnected", (err) => {
  console.log(err);
});
