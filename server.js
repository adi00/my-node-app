const express = require("express");
const app = express();
const path = require("path");

const PORT = 5000;
app.use(express.urlencoded({ extended: true }));
//app.use(express.static("public"));git

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});