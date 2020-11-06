//import express from "express";
const express = require('express');
//import homePageController from "../controllers/homePageController";
const homePageController = require('../controllers/homePageController');
//import registerController from "../controllers/registerController";
const registerController = require('../controllers/registerController');
//import loginController from "../controllers/loginController";
const loginController = require('../controllers/loginController');
//import auth from "../validation/authValidation";
const auth = require('../validation/authValidation');
//import passport from "passport";
const passport = require('passport');
//import initPassportLocal from "../controllers/passportLocalController";
const initPassportLocal = require('../controllers/passportLocalController');

// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", loginController.checkLoggedIn, homePageController.handleHelloWorld);
    router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get("/register", registerController.getPageRegister);
    router.post("/register", auth.validateRegister, registerController.createNewUser);
    router.post("/logout", loginController.postLogOut);
    return app.use("/", router);
};
module.exports = initWebRoutes;
