const express = require("express")
const router = express.Router();
let {people} =  require("../data")
const {getperson, updateperson} = require("../controllers/people")

router.get("/", getperson);
router.post("/", updateperson);

module.exports = router;



// to enhance redability we map the logical part to the controller.


// another way of doing the above thing is

//router.route("/").get(getperson).post(updateperson);