const express = require("express");
const {  postAdmin, postContact, getContact } = require("../Controller/Contact");
const router = express.Router();
router.route("/contact").post(postContact).get(getContact);

module.exports = router;
