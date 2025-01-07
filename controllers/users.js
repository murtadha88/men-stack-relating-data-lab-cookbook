const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get("/", async (req,res) => {
    const users = await User.find();
    res.render("users/index.ejs", {
        users,
    });
});

router.get("/:userId/show", async (req,res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render("users/show.ejs", {
            currentUser,
            pantry:currentUser.pantry,
        });

    } catch (error) {
        console.log(error);
        res.render("/index.ejs");
    }
});

module.exports = router;