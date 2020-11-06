require('dotenv').config();
//import express from "express";
const express = require('express');
//import configViewEngine from "./configs/viewEngine";
const configViewEngine = require('./configs/viewEngine');
//import initWebRoutes from "./routes/web";
const initWebRoutes = require('./routes/web');
//import bodyParser from "body-parser";
const bodyParser = require('body-parser');
//import cookieParser from 'cookie-parser';
const cookieParser = require('cookie-parser');
//import session from "express-session";
const session = require('express-session');
//import connectFlash from "connect-flash";
const connectFlash = require('connect-flash');
//import passport from "passport";
const passport = require('passport');

const app = express();

// const jwt = require ('jsonwebtoken');
// const resolvers = require ('./resolvers');
// const nodemailer = require ('nodemailer');
//use cookie parser
app.use(cookieParser('secret'));

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));

// Enable body parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Config view engine
configViewEngine(app);

//Enable flash message
app.use(connectFlash());

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

// init all web routes
initWebRoutes(app);


let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Login and Signup for Quests! Running on port ${port}!`));
