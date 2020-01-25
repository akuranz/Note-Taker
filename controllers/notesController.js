const fs = require("fs");
let notes = require("../db/db.json");

module.exports = {
  getNotes: function(req, res) {
    return res.json(notes);
  },
  newNote: function(req, res) {
    const newNote = req.body;
    console.log(newNote);
    // const id =
    //   notes.length === 0 ? 0 : parseInt(notes[notes.length - 1].id + 1);
    // console.log("blah:", notes[notes.length - 1].id + 1);
    // console.log("ID CONTR", id);
    // newNote.id =
    //   notes.length === 0 ? 0 : parseInt(notes[notes.length - 1].id + 1);
    notes.push({
      ...newNote,
      id: notes.length === 0 ? 0 : parseInt(notes[notes.length - 1].id + 1)
    });
    fs.writeFileSync("db/db.json", JSON.stringify(notes));
    res.json(true);
  },
  deleteNote: function(req, res) {
    const id = parseInt(req.params.id);
    notes = notes.filter(function(note) {
      if (note.id === id) {
        return false;
      }
      return true;
    });
    fs.writeFileSync("db/db.json", JSON.stringify(notes));
    res.json(true);
  }
};
