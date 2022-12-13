import express = require("express")

const pool = require('./db')

const router = express.Router()
//@ts-ignore
router.get('/', async (req: any, res: any) => {

  const allComments = await pool.query(
    "SELECT BLOG_ID, COUNT(*) as overall FROM COMMENTS GROUP BY BLOG_ID",
    []
  )

  let comments: any = []

  for (let i = 0; i < allComments.rowCount; ++i) {
    const currentItem = allComments.rows[i]
    comments.push({
      blog_id: currentItem.blog_id,
      overall: currentItem.overall
    })
  }

  res.json(comments)

})

router.get('/blogComments', async (req: any, res: any) => {

  const allComments = await pool.query(
    "SELECT c.*, u.username FROM COMMENTS c, USERS u WHERE c.BLOG_ID = $1 AND u.ID = c.owner_id ORDER BY CREATED_AT",
    [req.query.blog_id]
  )

  let comments: any = []

  for (let i = 0; i < allComments.rowCount; ++i) {
    const currentItem = allComments.rows[i]
    const date: string = String(currentItem.created_at)
    date.substring(0, 10)
    comments.push({
      id: currentItem.comment_id,
      content: currentItem.content,
      owner_username: currentItem.username,
      date: date
    })
  }

  res.json(comments)

})


router.post('/postComment', async (req: any, res: any) => {

  const userID = await pool.query(
    "SELECT ID FROM USERS WHERE EMAIL=$1",
    [req.body.email]
  )

  const creation = await pool.query(
    "INSERT INTO COMMENTS(BLOG_ID, OWNER_ID, CONTENT) VALUES($1,$2,$3) RETURNING CREATED_AT",
    [req.body.blog_id, userID.rows[0].id, req.body.content]
  )

  res.json({ created_at: creation.rows[0].created_at })


})

module.exports = router
