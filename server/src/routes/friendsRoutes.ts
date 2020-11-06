import { Router } from "express"
import multer from "multer";
import { getFriends, addFriend, updateFriend, deleteFriend } from "../controllers/friends"
import path from "path";

const router: Router = Router();

// using Multer to upload photo & put in uploads folder for easy access later 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("smth file=>", file);
      cb(null, path.join(__dirname, "/../../public/uploads"));
    },
  
    filename: function (req: any, file: any, cb: any) {
      cb(null, Date.now() + "-" + file.originalname);
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
const upload = multer({ storage, fileFilter });

router.get("/friends", getFriends)
                     
router.post("/add", upload.single('image'), addFriend)

router.put("/edit/:id", updateFriend)

router.delete("/delete/:id", deleteFriend)


export = router;

