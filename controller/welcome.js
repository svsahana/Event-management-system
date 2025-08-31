// routes/welcome.js
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  if(!req.session.user)
    return res.redirect("/Login");
  res.render("welcome");
});

module.exports = router;
