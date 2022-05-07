const express = require('express');
const route = express.Router()
const con = require('../connection/conn');
const hashing = require('../middleware/passwordHashing');
const validator = require('validator');
const phone = require('phone');
const brypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../connection/conn');
const jwtkey = process.env.Keyw
route.post("/signin", async(req, res) => {
    const { name, phnum, email, password, confirmpassword } = req.body;

    if (!name && !phnum && !email && !password && !confirmpassword) {
        res.status(401).json({ message: "plz fill complete form" })
    }
    if (!validator.isEmail(email)) {
        res.status(401).json({ message: "plz provide correct email" })
    }
    const checkquerry = "SELECT * FROM `cutommer` WHERE email =?";
    db.query(checkquerry, [email], async(errr, dataa) => {
        if (dataa[0]) {
            res.status(401).json({ message: "email already register plz login" });
        } else {
            if (password === confirmpassword) {
                const sqlquery = "INSERT INTO cutommer ( Name, email, Phnum, password) VALUES(?,?,?,?)"
                const passwordhash = await brypt.hash(password, 12);
                db.query(sqlquery, [name, email, phnum, passwordhash], (err, data) => {
                    if (err) {
                        res.status(500).json({ message: err })
                    }
                    // res.send(data);
                    res.status(201).json({ message: "user resister successfully" })
                })


            } else {
                res.status(401).json({ message: "plz provide check your password" })
            }

        }
    })



})
route.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email && !password) {
        res.status(401).json({ message: "plz enter  credentials" });
    }
    const loginquery = "SELECT * FROM `cutommer` WHERE email =?";
    db.query(loginquery, [email], async(err, data) => {
        if (!data.length || await brypt.compare(data[0].password, password)) {
            res.status(401).json({ message: "invalid credentials plz try again later" });
        } else if (err) {
            res.status(501).json({ message: "server error plz try again later" });
        } else {
            const token = jwt.sign({ id: data[0].id }, jwtkey, {
                expiresIn: process.env.Expirein
            })
            console.log(token)
            const cookieOptions = { expiresIn: new Date(Date.now() + process.env.ExpireCookie * 3600 * 2400), httpOnly: true };
            res.cookie("userLogin", token, cookieOptions);
            return res.status(201).json({ message: "user logged in successfully ", status: "success", name: data[0].name })
        }
    })


})

module.exports = route;