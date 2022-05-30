/* IMPORT */
const express = require("express");
const mongoose = require("mongoose");
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

app.use(express.json());

/* ROUTES */
app.post("/api/member", membersCtrl.addMember);

/* EXPORT */
module.exports = app;
