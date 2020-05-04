const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "front-end/build")));




server.get("/", (req, res) => {
	res.status(200).json({ status: "I'm alive and on fire :fireball:" });
});

// server.get("/reviews", (req, res) => {
// 	res.status(200).json({ status: "I'm alive and on fire..reviewsbb :fireball:" });
// });


server.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/front-end/build/index.html"));
});

module.exports = server;
