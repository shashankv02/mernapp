const express = require("express");
const router = express.Router();

//@route   GET api/profile/test
//@desc    Tests profiles route
//@access  public
router.get("/test", (req, res) => res.json({ msg: "profiles work" }));

module.exports = router;
