import express = require("express")

const pool = require('./db')

const router = express.Router()


router.get('/auth', async(req:any, res:any) => {
				console.log('authrouter')
  const likedPosts = await pool.query(
	"SELECT DISTINCT(l.id), BLOG_ID, OWNER_ID FROM LIKES l, USERS u  WHERE l.OWNER_ID in (SELECT ID FROM USERS WHERE EMAIL=$1)",
	[req.query.email]
	)
	
	let likes:any = []

	for(let i=0; i< likedPosts.rowCount; ++i){
		likes.push({
			blog_id: likedPosts.rows[i].blog_id,
			owner_id: likedPosts.rows[i].owner_id
		})
	}
	

	res.json(likes)
})

router.post('/liked', async(req:any, res:any) => {

	let response

  const owner = await pool.query(
    "SELECT ID FROM USERS WHERE EMAIL=$1",
    [req.body.email]
  )

  const isLiked = await pool.query(
    "SELECT COUNT(ID) as Overall FROM LIKES WHERE OWNER_ID = $1 AND BLOG_ID = $2",
    [owner.rows[0].id, req.body.blog_id]
  )

  console.log(isLiked.rows[0].overall)


  if(isLiked.rows[0].overall == 0) {
  console.log('+1')
    await pool.query(
      "INSERT INTO LIKES(OWNER_ID, BLOG_ID) VALUES($1,$2)",
      [owner.rows[0].id, req.body.blog_id]
    )
    response = true
  } else {
    await pool.query(
      "DELETE FROM LIKES WHERE OWNER_ID = $1 AND BLOG_ID = $2",
      [owner.rows[0].id, req.body.blog_id]
    )
    response = false
  }

  res.json({response: response})
})


module.exports = router
