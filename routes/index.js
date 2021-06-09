const route = require("express").Router();
const {findForShortCode, createShortURL, changeVisitsandTime} = require("../controllers/shortURL");
const {urlExistenceCheck, shortCodeValidation} = require("../middlewares/generateShortCode")

// redirect to the original URL path when requested with the short URL path
route.get("/:shortcode", async (req, res) => {
    let urlData = await findForShortCode(req.params.shortcode);
    if(urlData) {
        changeVisitsandTime(urlData.shortCode)
        res.status(301).redirect(urlData.url)
    } else {
        res.status(404).send({status: "Error", description: "No such URL found"});
    }
})

// generate a short URL path
route.post("/generate", urlExistenceCheck, shortCodeValidation, (req, res) => {
    createShortURL(req.body)
    res.status(201).send({status: "Success", shortCode: req.body.shortCode});
})

module.exports = {route}