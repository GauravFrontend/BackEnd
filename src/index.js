import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("server is running on port", process.env.PORT);
    });
  })
  .catch(err => {
    "MONGO db connection failed";
  });

// import express from "express"
// const app = express()

//     ; (async () => {
//         try {

//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error", () => {
//                 console.log("application is not able to talk with database");
//                 throw error
//             })

//             app.listen(process.env.PORT, () => {
//                 console.log(`App is listing to port ${process.env.PORT}`);
//             })

//         } catch (error) {
//             console.error("ERROR", error)
//         }
//     })()
