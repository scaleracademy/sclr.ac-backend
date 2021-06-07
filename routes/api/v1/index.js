const route = require("express").Router();
const {findForShortCode, createShortURL} = require("../../../controllers/shortURL");

// Handle get request which redirects to the main url path if available
route.get("/:shortcode", async (req, res) => {
    let urlData = await findForShortCode(req.params.shortcode);
    if(urlData) {
        res.status(301).redirect(urlData.url)
    } else {
        res.status(404).send("Not Found");
    }
})

// Handle post request to generate a short url path
// TODO implement some middlewares on the post request to remove
route.post("/", (req, res) => {
    createShortURL(req.body)
    res.send(201).send({shortCode: req.body.shortCode});
})

module.exports = {route}