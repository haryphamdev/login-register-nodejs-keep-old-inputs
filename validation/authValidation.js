//import { check } from "express-validator";
const { check } = require('express-validator');

let validateRegister = [
    check("display_name", "No spaces allowed").trim(),
    check("email_address", "Invalid email").isEmail().trim(),

    check("password", "Invalid password. Password must be at least 8 chars long")
    .isLength({ min: 2 }),

    check("passwordConfirmation", "Password confirmation does not match password")
    .custom((value, { req }) => {
        return value === req.body.password
    })
];

let validateLogin = [
    check("email_address", "Invalid email").isEmail().trim(),

    check("password", "Invalid password")
    .not().isEmpty()
];



module.exports = {
    validateRegister: validateRegister,
    validateLogin: validateLogin
};
