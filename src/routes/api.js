const express = require('express');
const router = express.Router();

// get the list of restaurants
router.get('/restaurants', function (req, res, next){
    res.send(res.body);
});


module.exports = router;