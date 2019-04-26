var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
burger.findAll().then(function(data){
  var hbsObject={burgers:data};

  //  console.log( res.json(result));

console.log(hbsObject);

res.render("index",hbsObject);
});

});

router.post("/api/burgers", function(req, res) {
  var burger =req.body;
  burger.create({
    // routeName: routeName,
    burger_name: burger.burger_name,
    devoured:burger.devoured
  });

  res.status(204).end();
});

 


// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);
//   burger.update(req.params.id, function(result){
//     console.log(result);
//     res.sendStatus(200);
//   })
// });

module.exports = router;
