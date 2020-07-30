const express = require("express");
const server = express();

const cors = require("cors");
const helmet = require("helmet");
const session = require('express-session');
const protect = require("./data/middleware/authenticate-middleware");
const port = process.env.PORT;

const RegisterRouter = require("./data/Routes/Register");
const LoginRouter = require("./data/Routes/Login");
const ItemRouter = require("./data/Routes/Item");
const OwnerRouter = require("./data/Routes/Owners");
const ItemTypeRouter = require("./data/Routes/ItemType");

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({errorMessage: "Something went wrong."});
});

server.use(
    session({
        name: 'notsession',
        secret: 'Gottah Keep It',
        Cookie: {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            secure: true,
        },
        httpOnly: true,
        resave: false,
        saveUninitialized: false,
    })
);

server.use("/api/register", RegisterRouter);
server.use("/api/login", LoginRouter);
server.use("/api", ItemRouter);
server.use("/api/owner", protect, OwnerRouter);
server.use("/api/itemType", ItemTypeRouter);

server.get("/", (req, res) => {
    res.json({message: "Welcome to African Marketplace API"})
})
server.listen(port || 5000, () => console.log('API running on port 5000'));