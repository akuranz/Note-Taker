const express = require("express");
const router = express.Router();
const notesRoutes = require("./notes");

router.use("/notes", notesRoutes);
// router.use("/notes/:id", notesRoutes);

module.exports = router;
