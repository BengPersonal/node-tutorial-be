const router = require('express').Router();



router.get("/print_hello_world", function(req, res){
    res.json("Hello World")
})

router.post("/print_bye", function(req, res){
    res.json("Bye Bye")
})

module.exports = router