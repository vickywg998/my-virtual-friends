import * as dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
// file upload dependency
// import {fileRoutes} from "./routes/fileRoutes";

//routes
import friendRoutes from "./routes/friendsRoutes";

// initialize configuration
dotenv.config();


const router: Application = express();
const PORT = process.env.SERVER_PORT || 3001;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(cors());
// router.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, Content-Type, X-Requested-With,Accept, Authorization"
//   );
//  });

 // for parsing multipart/form-data
router.use(express.static('public'));

router.use(friendRoutes);
// router.use("/images", fileRoutes);


// console.log(path.join(__dirname, "/../uploads/"))

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ekzcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);

mongoose
  .connect(uri, options)
  .then(() =>
    router.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });


// sample routes
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
