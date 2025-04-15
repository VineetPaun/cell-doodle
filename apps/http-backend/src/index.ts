import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

const app = express()

app.post("/signup", (req, res) => {
    const {email, password} = req.body

    // check if user exists or not
    // if yes tell user exists
    // if no take email and password from user and add it to db
    // hash the password before storing

    res.json({message: "User created"})
})

app.post("/signin", (req, res) => {
    const {email, password} = req.body

    const userId = 1
    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json(token)

})

app.post("/create-room", (req, res) => {

})

app.listen(3001)