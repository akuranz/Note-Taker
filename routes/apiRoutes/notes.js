const express = require("express");
const router = express.Router();
const notesController = require("../../controllers/notesController");

// Routes
// =============================================================
router
  .route("/")
  .get(notesController.getNotes)
  .post(notesController.newNote);

router.route("/:id").delete(notesController.deleteNote);

module.exports = router;
