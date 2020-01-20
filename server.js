// Dependencies
// =============================================================
const db = require("./db/db.json");
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations (DATA)
// =============================================================
const notes = db;

// Routes
// =============================================================
// app.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//this should pull from db.json file
app.get("/api/notes", function(req, res) {
  return res.json(notes);
});

//this should post to db.json file
app.post("/api/notes", function(req, res) {
  const newNote = req.body;
  console.log(newNote);
  notes.push(newNote);
  res.json(true);
});

// app.get(function(req, res) {
//   notes.findById(req.params.notes_id, function(err, bear) {
//     if (err) res.send(err);
//     res.json(notes);
//   });
// });

app.delete("/api/notes/:id", function(req, res) {
  const newNote = req.body;
  console.log(newNote);
  notes.push(newNote);
  res.json(true);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
