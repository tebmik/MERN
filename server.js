const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/Items");

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// db config
const db = require("./config/keys").mongoURI;


//connect to mongo
mongoose
    .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// use routes
app.use("/api/items", items);
    
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is listeneing on port ${port}`));