const express = require("express");
const router = express.Router();
const mw = require("./middleware");

router.get("/", mw.redirect);
router.get("/list", mw.list);
router.post("/add", mw.add);
router.post("/save", mw.save);
router.post("/remove", mw.remove);

module.exports = {router};