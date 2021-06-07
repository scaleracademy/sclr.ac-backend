const express = require("express");

const app = express();

const PORT = process.env.PORT || 6767;
const {db} = require("./config/mongodb")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api", require("./routes/api/").route)

app.listen(PORT, () => {
    console.log("server started");
})