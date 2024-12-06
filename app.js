const express = require("express");
const app = express();
const morgan = require("morgan");

const router = require('./routes/routes');

app.use(express.json({extended:true}));//necesario para recibir por body
app.use(morgan("dev"));
app.use(router());

module.exports = app;