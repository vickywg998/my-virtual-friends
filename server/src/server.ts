
import * as dotenv from "dotenv";
import express, { Application} from "express";
import mongoose from "mongoose";
import cors from "cors";
import friendRoutes from "./routes";
import bodyParser from "body-parser";

// initialize configuration
dotenv.config();

const router: Application = express();
const PORT = process.env.SERVER_PORT || 3001;

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(cors())
router.use(friendRoutes)


const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ekzcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)


mongoose
  .connect(uri, options)
  .then(() =>
    router.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })


  // sample routes 
// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type,Accept, Authorization"
//   );



// router.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("Hello World v2");
//   res.status(200).json({
//       message: "it's working"
//   })
// });

// router.use((req: Request, res: Response, next: NextFunction) => {
//     const error = new Error("Route not found.");
//     res.status(404).json({
//         error:error.message
//     })
// })
