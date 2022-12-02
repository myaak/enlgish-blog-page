import express = require("express")

const pool = require('./db')

const router = express.Router()

//@ts-ignore
router.get('/', async(req:any, res:any) => {
  const blogs = await pool.query(
    "SELECT * FROM BLOGS ORDER BY PUBLISH_DATE",
    []
  )

  let blogsArray:any = []
  let startIndex = 0
  let indexOfBackslash = 0

  for(let i=0; i<blogs.rowCount - 1; ++i) {

    const content = blogs.rows[i].content
    let sentences:any = []

    for(let j=0; j < content.length; ++j) {
      console.log(content[j])
      if(content[j] === '\n') {
        indexOfBackslash = j
        sentences.push(content.substr(startIndex, indexOfBackslash))
        startIndex = j
      }

    }

    const blogsRow = blogs.rows[i]
    
    blogsArray.push({
      id: blogsRow.blog_id,
      title: blogsRow.title,
      description: blogsRow.description,
      image: blogsRow.image,
      content: sentences,
      likes: blogsRow.likes,
      publish_date: blogsRow.publish_date,
    })
  }

  res.json(blogsArray)

})


module.exports = router
