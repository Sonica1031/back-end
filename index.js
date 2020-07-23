const express = require("express");
const server = express();

const cors = require("cors");
const helmet = require("helmet");
const port = process.env.PORT;

const RegisterRouter = require("./data/Routes/Register");
const LoginRouter = require("./data/Routes/Login");

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({errorMessage: "Something went wrong."});
});

server.use("/api/register", RegisterRouter);
server.use("/api/login", LoginRouter);
server.listen(port || 5000, () => console.log('API running on port 5000'));