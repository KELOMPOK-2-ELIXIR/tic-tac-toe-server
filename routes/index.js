const express = require("express");
const router = express.Router();
const ControllerUser = require("../controllers/controlleruser.js");

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Tic Tac Toe Server"
  })
});
router.post('/signup', ControllerUser.signup);
router.post('/data', ControllerUser.findall);
router.put('/data', ControllerUser.updatedata);

module.exports = router;