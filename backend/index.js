import dotenv from "dotenv";
dotenv.config({ path: "./.env" })
import DBConnection from "./src/DB/DBConnection.js";
import app from "./src/app.js"


DBConnection(process.env.MONGOURI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("server started")
        })
    })
    .catch((err) => console.log("Mongo db connection error", err));