const mongoose = require("mongoose");
const {ShortenURL} = require("../models/shortURL")

const createShortURL = (urldata) => {
    ShortenURL.create({
        url: urldata.url,
        shortCode: urldata.shortCode
    }, (err) => {
        if(err) {
            console.log("unable to insert data in db : ", err);
        }
    })
}

const findForShortCode = async (shortCode) => {
    return await ShortenURL.findOne({
        shortCode: shortCode
    }, (err, data) => {
        if(err) {
            console.log("error retrieving data from db : ", err);
        }
        else {
            return data;
        }
    });
}

module.exports = {
    createShortURL,
    findForShortCode
}