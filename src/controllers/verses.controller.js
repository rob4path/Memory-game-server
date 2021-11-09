exports.addVerses = async (req, res, next) => {
    try {
      const versesList = req.body 
     // call versesService
      
      return res.json({ message: 'OK' })
    } catch (error) {
      next(error)
    }
  }