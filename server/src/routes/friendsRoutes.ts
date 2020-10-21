import { Router } from "express"
import { getFriends, addFriend, updateFriend, deleteFriend } from "../controllers/friends"

const router: Router = Router();


router.get("/friends", getFriends)

router.post("/add", addFriend)

router.put("/edit/:id", updateFriend)

router.delete("/delete/:id", deleteFriend)


export = router;

