import {IFriend } from "../types/friend";
import { model, Schema } from "mongoose";

const friendSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    hobbies: {
      type: String,
      required: false,
    },
    music_genre: {
      type: String,
      required: false,
    },
    pets: {
      type: String,
      required: false,
    },
    image: {
      type: Array
    },

  },
  { timestamps: true }
);

export default model<IFriend>("Friend", friendSchema);
