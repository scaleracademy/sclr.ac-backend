const {findForShortCode, findByURL} = require("../controllers/shortURL")

// this function returns a random string of length 5
function generateCode() {
    let randomCode = new Array();
    let characterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
        randomCode.push(characterPool.charAt(Math.floor(Math.random() * characterPool.length)));
    }
    return randomCode.join('')
}

const urlExistenceCheck = async (req, res, next) => {

    let urlData = await findByURL(req.body.url)

    // send the existing short code if URL path already exists in the database and
    // the client haven't sent any custom short code
    if(urlData && !req.body.shortCode) {
        res.status(201).send({status: "Success", shortCode: urlData.shortCode})
    }

    // if the url doesn't exists OR the client has requested to make a custom short URL the call the next middleware
    else {
        next()
    }

}

const shortCodeValidation = async (req, res, next) => {

    // check wheather client has sent a custom URL short code
    if (req.body.shortCode) {

        // check wheather the custom URL short code already exists in the database
        if(await findForShortCode(req.body.shortCode)) {
            res.status(406).send({status: "Error", description: "Custom URL already exists"})
        }

        // if custom URL doesn't exixts in the database then call the next middleware
        else {
            next()
        }
    }
    
    // if custom URL short code doesn't exist then generate a random code
    else {
        let randomCode;

        // generate random code until it doesn't exists in database
        do {
            randomCode = generateCode()
        } while(await findForShortCode(randomCode))

        // modify the request body and call the next middleware
        req.body.shortCode = randomCode
        next()
    }
    
};

module.exports = {
    urlExistenceCheck,
    shortCodeValidation
}