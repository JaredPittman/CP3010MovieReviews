import mongoose from "mongoose";

const { Schema, model } = mongoose;

const movieSchema = new Schema({
  name: String,
  email: String,
  movie: String,
});

const bikeModel = model("movie", movieSchema);
export default movieModel;
