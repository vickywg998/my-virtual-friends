import express, { Request, Response, NextFunction } from "express";
import Friend from "../models/friend";
import { IFriend } from "../types/friend";
import multer from "multer";
import path from "path";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("smth file=>", file);
    cb(null, path.join(__dirname, "/../../uploads/"));
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post(
  "/",
  upload.array("images", 5),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;

      const newImage: IFriend = new Friend({
        name: body.name,
        gender: body.gender,
        age: body.age,
        hobbies: body.hobbies,
        music_genre: body.music_genre,
        pets: body.pets,
        images: req.files,
        status: body.status,
      });

      await newImage.save();
      res.send(newImage);
    } catch (error) {
      throw error;
    }
  }
);
export { router as fileRoutes };
