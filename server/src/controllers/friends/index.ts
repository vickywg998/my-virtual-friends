import { Request, Response, NextFunction } from "express";
import { IFriend } from "../../types/friend";
import Friend from "../../models/friend";
import multer from "multer";
import path from "path";

const getFriends = async (req: Request, res: Response): Promise<void> => {
  try {
    const friends: IFriend[] = await Friend.find();
    res.status(200).json({ friends });
  } catch (error) {
    throw error;
  }
};

// using Multer to upload photo & put in uploads folder for easy access later 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("smth file=>", file);
    cb(null, path.join(__dirname, "/../../uploads/"));
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, file.fieldname + '-' + Date.now());
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


const addFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IFriend, "name" | "gender"| "age" | "hobbies" | "music_genre" | "pets" | "image" | "status">;
  
    const friend: IFriend = new Friend({
      name: body.name,
      gender: body.gender,
      age: body.age,
      hobbies: body.hobbies,
      music_genre: body.music_genre,
      pets: body.pets,
      image: req.file,
      status: body.status,
    });
    console.log(req.file);

    const newFriend: IFriend = await friend.save();
    const allFriends: IFriend[] = await Friend.find();
    res
    .status(201)
    .json({
      message: "friend added",
      friend: newFriend,
      // friends: allFriends,
    });
  } catch (error) {
    throw error;
  }
  console.log('friend added successfully')
};

const updateFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateFriend: IFriend | null = await Friend.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allFriends: IFriend[] = await Friend.find();
    res.status(200).json({
      message: "Friend updated",
      friend: updateFriend,
      friends: allFriends,
    });
  } catch (error) {
    throw error;
  }
};

const deleteFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedFriend: IFriend | null = await Friend.findByIdAndRemove(
      req.params.id
    );
    const allFriends: IFriend[] = await Friend.find();
    res.status(200).json({
      message: "friend deleted",
      friend: deletedFriend,
      friends: allFriends,
    });
  } catch (error) {
    throw error;
  }
};

export { getFriends, addFriend, updateFriend, deleteFriend };

