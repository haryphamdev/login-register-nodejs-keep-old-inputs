//import registerService from "./../services/registerService";
const registerService = require('./../services/registerService');
//import { validationResult } from "express-validator";
const {validationResult} = require('express-validator');


let getPageRegister = (req, res) => {
    let oldInput = {
        full_name: "",
        display_name: "",
        email_address: "",
        birthday: "",
    }
    return res.render("register.ejs", {
        errors: req.flash("errors"),
        oldInput: oldInput
    });
};

let createNewUser = async (req, res) => {
    let oldInput = {
        full_name: req.body.fullName,
        display_name: req.body.display_name,
        email_address: req.body.email_address,
        birthday: req.body.birthday,
    }

    //validate required fields
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        //whenever you have an input invalid, it will be shown with a flash message, and your page will be reloaded (cuz we use res.redirect(/register)
        // to save the old input, do as follow. create an oldInputObject to save user inputs data.
        req.flash("errors", errorsArr);
        // return res.redirect("/register");
        return res.render("register.ejs", // instead of redirecting, we re-render the view
            {
                errors: req.flash("errors"),
                oldInput: oldInput
            } // passing an object to view
        )
    }

    //create a new user
    let newUser = {
        full_name: req.body.fullName,
        display_name: req.body.display_name,
        email_address: req.body.email_address,
        birthday: req.body.birthday,
        password: req.body.password,

    };
    try {
        await registerService.createNewUser(newUser); //
        return res.redirect("/login");
    } catch (err) {
        // this function only call when the line:  await registerService.createNewUser(newUser) have an error.
        //    req.flash('errors', err);
        return res.render("register.ejs", {
            errors: req.flash('errors'),
        });

    }
};
module.exports = {
    getPageRegister: getPageRegister,
    createNewUser: createNewUser
};
