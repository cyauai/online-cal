const express = require("express");
let interestRateManager = require("../interestRateManager");
let router = express.Router();


router.route("/").get((req, res) => {
        res.send(interestRateManager);
    });

router.route("/").post((req, res) => {
    interestRateManager = req.body;
});
    

module.exports = router;