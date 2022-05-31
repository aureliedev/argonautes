/* IMPORT */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const membersCtrl = require("./controllers/members");

const app = express();

/* CONFIG DOTENV */
require("dotenv").config({ path: ".env" });
const username = process.env.dbUserName;
const password = process.env.dbPassword;
const db = process.env.DB_NAME;

/* CONNEXION A MongoDB */
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@argonautes.vw5ug.mongodb.net/${db}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors());
app.use(express.json());

/* bodyParser: pr traiter la data en transit */
app.use(bodyParser.json()); // Pr mettre la req au bon format
app.use(bodyParser.urlencoded({ extended: true }));

/* ROUTES */
app.post("/api/member", membersCtrl.addMembers);
app.get("/api/member", membersCtrl.getMembers);

/* EXPORT */
module.exports = app;
