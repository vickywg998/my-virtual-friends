import { Router } from "express"
import multer from "multer";
import { getFriends, addFriend, updateFriend, deleteFriend } from "../controllers/friends"

const router: Router = Router();
const upload = multer();


router.get("/friends", getFriends)
                     
router.post("/add", upload.single('image'), addFriend)

router.put("/edit/:id", updateFriend)

router.delete("/delete/:id", deleteFriend)


export = router;

