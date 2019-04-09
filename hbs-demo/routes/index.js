var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express",
    condition: true,
    numbers: [1, 2, 3, 4],
    list: [
      { fruits: ["Mango", "Apple", "Grapes"] },
      { veges: ["Potato", "Avocado", "Onion"] }
    ]
  });
});

module.exports = router;
