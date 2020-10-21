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
      required: true,
    },
    hobbies: {
      type: String,
      required: true,
    },
    music_genre: {
      type: String,
      required: true,
    },
    pets: {
      type: String,
      required: false,
    },
    images: {
      type: Object,
      required: false,
    },

  },
  { timestamps: true }
);

export default model<IFriend>("Friend", friendSchema);
