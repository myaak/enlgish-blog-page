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

  for(let i=0; i < blogs.rowCount; ++i) {

    const content = blogs.rows[i].content
    let sentences:any = []

    for(let j=0; j < content.length; ++j) {
          if(j === content.length-1) {
	    sentences.push(content.substring(startIndex, j) + ".")
	    startIndex = 0
	    indexOfBackslash = 0
	  }
    else {
      if(content[j] === "\\" && content[j+1] === "n") {
        indexOfBackslash = j
          sentences.push(content.substring(startIndex, indexOfBackslash))
        startIndex = j+2
	j+=2
    	}
      }
    }


    const blogsRow = blogs.rows[i]

		const likesForPost = await pool.query(
			"SELECT DISTINCT L.ID FROM LIKES L, BLOGS b WHERE L.BLOG_ID = $1",
		 [blogsRow.blog_id]	
		)
    
    blogsArray.push({
      id: blogsRow.blog_id,
      title: blogsRow.title,
      description: blogsRow.description,
      image: blogsRow.image,
      content: sentences,
      likes: likesForPost.rowCount,
      publish_date: blogsRow.publish_date,
    })
  }

  res.json(blogsArray)

})


module.exports = router
