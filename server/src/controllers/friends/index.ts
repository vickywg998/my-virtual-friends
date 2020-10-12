import { Request, Response } from "express";
import { myBuddy } from "../../types/friend";
import Friend from "../../models/friend";

const getFriends = async (req: Request, res: Response): Promise<void> => {
  try {
    const friends: myBuddy[] = await Friend.find();
    res.status(200).json({ friends });
  } catch (error) {
    throw error;
  }
};

const addFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<myBuddy, "name" | "gender"| "age" | "hobbies" | "music_genre" | "pets" |  "status">;

    const friend: myBuddy = new Friend({
      name: body.name,
      gender: body.gender,
      age: body.age,
      hobbies: body.hobbies,
      music_genre: body.music_genre,
      pets: body.pets,
      status: body.status,
    });

    const newFriend: myBuddy = await friend.save();
    const allFriends: myBuddy[] = await Friend.find();

    res
      .status(201)
      .json({
        message: "friend added",
        friend: newFriend,
        friends: allFriends,
      });
  } catch (error) {
    throw error;
  }
  console.log('function ran')
};

const updateFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateFriend: myBuddy | null = await Friend.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allFriends: myBuddy[] = await Friend.find();
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
    const deletedFriend: myBuddy | null = await Friend.findByIdAndRemove(
      req.params.id
    );
    const allFriends: myBuddy[] = await Friend.find();
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

// const register = (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).json({
//     message: "register route is working.",
//   });
// };

// const deleteUser = (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).json({
//     message: "delete route is working.",
//   });
// };
