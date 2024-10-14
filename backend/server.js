import express from "express";
import { ConnectDB } from "./config/db";

const app = express();

app.listen(5000, () => {
    ConnectDB();
    console.log("Server starts at http://localhost:5000");

})