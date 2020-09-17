const router = require("express").Router();
const passport = require("passport");
const ctrl = require("../controllers");

const scope = ["profile", "email"];

// LOGIN
router.get("/login", passport.authenticate("google", { scope: scope }));

// AUTHENTICATE
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  ctrl.auth.callback
);

// DESTROY
router.get("/logout", ctrl.auth.logout);

module.exports = router;
