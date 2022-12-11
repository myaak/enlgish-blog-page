import express = require("express")

//@ts-ignore
const pool = require('./db')

const router = express.Router()

//@ts-ignore
router.get("/likes", async(req:any, res:any ) => {

  res.json()
})

//@ts-ignore
router.get("/blogsLike", async(req:any, res:any) => {

  const blogsLike = await pool.query(
    "SELECT BLOG_ID, IMAGE, TITLE, (SELECT COUNT(LIKE_ID) FROM LIKES GROUP BY BLOG_ID) as Likes FROM BLOGS ORDER BY 3 LIMIT 1",
    []
  ) 

  res.json({
    id: blogsLike.rows[0].blog_id,
    image: blogsLike.rows[0].image,
    title: blogsLike.rows[0].title,
    likes: blogsLike.rows[0].likes
  })
})

//@ts-ignore
router.get("/blogsComment", async(req:any, res:any) => {

  const blogsComment = await pool.query(
    "SELECT BLOG_ID, IMAGE, TITLE, (SELECT COUNT(COMMENT_ID) FROM COMMENTS GROUP BY BLOG_ID) as Comments FROM BLOGS ORDER BY 3 LIMIT 1",
    []
  ) 

  res.json({
    id: blogsComment.rows[0].blog_id,
    image: blogsComment.rows[0].image,
    title: blogsComment.rows[0].title,
    comments: blogsComment.rows[0].comments
  })
})
