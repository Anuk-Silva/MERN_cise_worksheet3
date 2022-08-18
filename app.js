// app.js
const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config({ path: "./env"});
var cors = require("cors");
const path = require("path");
const { response } = require('express');

// routes
const books = require("./routes/api/books");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));
// Init Middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/books", books);

app.use(express.static(path.join(__dirname, "my-cise-mern-book-app/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "my-cise-mern-book-app/build", "index.html"));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
