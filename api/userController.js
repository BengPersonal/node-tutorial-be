const router = require("express").Router();
const User = require("../schema/userSchema")

router.get('/all-user', (req, res) => {
    User.find()
        .then((result) => {
            console.log('Done getting user')
            res.send(result);
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router