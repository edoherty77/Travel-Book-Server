const db = require("../models");
const redirect = process.env.CLIENT_URI;

const callback = (req, res) => {
  res.redirect(`${redirect}`);
};

const logout = (req, res) => {
  req.logout();
  res.redirect(`${redirect}`);
};

module.exports = { callback, logout };
