const Schema = mongoose.Schema

const verseSchema = new Schema({
  
    reference: {
      type: String,
      unique: true
    },

    verse: {
      type: String,
    },
    
  
  })
  module.exports = mongoose.model('Verse', verseSchema)