const Verse = require('../models/verse.model')

exports.addVerses = (versesList) => {
    const verse = new Verse({text: "aaa", reference: "sdghaskdghi"})
    verse.save();
}