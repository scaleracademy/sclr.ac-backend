const express = require("express");

const app = express();

const PORT = process.env.PORT || 6767;
const {db} = require("./config/mongodb")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", require("./routes/").route)

app.listen(PORT, () => {
    console.log("server started on port : ", PORT);
})