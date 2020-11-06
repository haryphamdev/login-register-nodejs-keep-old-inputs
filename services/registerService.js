//import DBConnection from "./../configs/DBConnection";
const DBConnection = require('./../configs/DBConnection');
//import bcrypt from "bcryptjs";
const bcrypt = require('bcryptjs');

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        // check email is exist or not
        let isEmailExist = await checkExistEmail(data.email_address);
        let isDisplayNameExist = await checkDisplayEmail(data.display_name);
        if (isEmailExist) {
            reject(`This email "${data.email_address}" already exists. Please choose another email`);
        } else if (isDisplayNameExist){
            reject(`This display name "${data.display_name}" already exists. Please choose another display name`);
        }
        else {
            // hash password
            let salt = bcrypt.genSaltSync(10);
            let userItem = {
                full_name: data.full_name,
                display_name: data.display_name,
                birthday: data.birthday,
                email_address: data.email_address,
                password: bcrypt.hashSync(data.password, salt),
            };
            
            //create a new account
            DBConnection.query(
                ' INSERT INTO users set ? ', userItem,
                function(err, rows) {
                    if (err) {
                        reject(false)
                    }
                    resolve("Create a new user successful");
                }
            );
        }
    });
};

let checkDisplayEmail = (display_name) => {
    return new Promise( (resolve, reject) => {
        try {
            DBConnection.query(
                ' SELECT * FROM `users` WHERE `display_name` = ?  ', display_name,
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    if (rows.length > 0) {
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let checkExistEmail = (email_address) => {
    return new Promise( (resolve, reject) => {
        try {
            DBConnection.query(
                ' SELECT * FROM `users` WHERE `email_address` = ?  ', email_address,
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    if (rows.length > 0) {
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};
module.exports = {
    createNewUser: createNewUser
};
