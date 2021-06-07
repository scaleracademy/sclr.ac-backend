const mongoose = require("mongoose");
const {ShortenURL} = require("../models/shortURL")

const createShortURL = (body) => {
    ShortenURL.create({
        url: body.url,
        shortCode: body.shortCode
    }, (err) => {
        if(err) {
            console.log("unable to insert data in db : ", err);
        }
    })
}

const findByURL = async (url) => {
    return await ShortenURL.findOne({
        url: url
    }, (err, data) => {
        if(err) {
            console.log("error retrieving data from db : ", err);
        }
        else {
            return data;
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

const changeVisitsandTime = (shortCode) => {
    ShortenURL.findOne({
        shortCode: shortCode
    }, (err, data) => {
        if(err) {
            console.log("error retrieving data from db : ", err);
        }
        else {
            data.visits++;
            data.lastVisited = Date.now()
            data.save()
        }
    });
}

module.exports = {
    createShortURL,
    findForShortCode,
    changeVisitsandTime,
    findByURL
}