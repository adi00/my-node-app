const express = require("express");
const app = express();
const path = require("path");

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
