const express = require("express");
const router = express.Router();

// MongoDB user model
const User = require("./../models/User");

// Password handler
const bcrypt = require("bcrypt");

// Signup
router.post("/signup", (req, res) => {
    let { name, email, password } = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();

    if (!name || !email || !password) {
        return res.json({
            status: "Failed",
            message: "Empty input fields!",
        });
    } else if (!/^[a-zA-Z ]*$/.test(name)) {
        return res.json({
            status: "Failed",
            message: "Invalid Name!",
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return res.json({
            status: "Failed",
            message: "Invalid Email address!",
        });
    } else if (password.length < 8) {
        return res.json({
            status: "Failed",
            message: "Password is too short!",
        });
    } else if (password.length > 30) {
        return res.json({
            status: "Failed",
            message: "Password is too long!",
        });
    } else {
        // Check if user already exists
        User.findOne({ email })
            .then((existingUser) => {
                if (existingUser) {
                    return res.json({
                        status: "Failed",
                        message: "User already exists!",
                    });
                }

                // Hash password and save user
                const saltRounds = 10;
                bcrypt
                    .hash(password, saltRounds)
                    .then((hashedPassword) => {
                        const newUser = new User({
                            name,
                            email,
                            password: hashedPassword,
                        });

                        newUser
                            .save()
                            .then((result) => {
                                res.json({
                                    status: "Success",
                                    message: "Signup Successful!",
                                    data: result,
                                });
                            })
                            .catch((err) => {
                                res.json({
                                    status: "Failed",
                                    message: "Error occurred while saving user account!",
                                });
                            });
                    })
                    .catch((err) => {
                        res.json({
                            status: "Failed",
                            message: "An error occurred while hashing password!",
                        });
                    });
            })
            .catch((err) => {
                res.json({
                    status: "Failed",
                    message: "An error occurred while checking for existing user!",
                });
            });
    }
});

// Signin
router.post("/signin", (req, res) => {
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();

    if (email === "" || password === "") {
        return res.json({
            status: "Failed",
            message: "Empty credentials supplied!",
        });
    }

    console.log("Email and password received:", { email, password });

    User.findOne({ email })
        .then(user => {
            if (user) {
                console.log("User found:", user);

                const hashedPassword = user.password;
                bcrypt.compare(password, hashedPassword)
                    .then(isMatch => {
                        console.log("Password match:", isMatch);

                        if (isMatch) {
                            return res.json({
                                status: "Success",
                                message: "Signin successful!",
                                data: user,
                            });
                        } else {
                            return res.json({
                                status: "Failed",
                                message: "Invalid email or password!",
                            });
                        }
                    })
                    .catch(err => {
                        console.error("Error comparing passwords:", err);
                        return res.json({
                            status: "Failed",
                            message: "An error occurred while comparing passwords.",
                        });
                    });
            } else {
                console.log("No user found with email:", email);
                return res.json({
                    status: "Failed",
                    message: "Invalid email or password!",
                });
            }
        })
        .catch(err => {
            console.error("Error finding user:", err);
            return res.json({
                status: "Failed",
                message: "An error occurred while checking for the user.",
            });
        });
});


module.exports = router;
