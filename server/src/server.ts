import * as dotenv from "dotenv";
import * as express from "express";


// initialize configuration
dotenv.config();


const app = express();
app.get("/", (req, res) => {
    res.send("Hello World")
})
const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`)
})