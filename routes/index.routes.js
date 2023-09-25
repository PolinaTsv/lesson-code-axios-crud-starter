const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/list", (req, res) =>
  res.send(`Here we'll render the characters list`)
);

module.exports = router;
