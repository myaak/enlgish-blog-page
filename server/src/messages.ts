import express = require("express")

const pool = require('./db')

const router = express.Router()


router.post("/newMessage", async (req: any, res: any) => {
  console.log('reqest', req.session.user)
  const newMessage = {
    owner: req.session.user.id,
    message: req.body.message
  }

  const postMessage = await pool.query(
    "INSERT INTO MESSAGES(MESSAGETEXT, MESSAGEOWNER_ID) VALUES($1,$2) RETURNING MESSAGETEXT, MESSAGEOWNER_ID",
    [newMessage.message, newMessage.owner]
  )

  const addNewMessage = {
    message: postMessage.rows[0].messagetext,
    owner: postMessage.rows[0].messageowner_id
  }

  res.json({ message: addNewMessage.message, ownerID: addNewMessage.owner, ownerName: req.session.user.username })

})


router
  .route("/allmessages")
  //@ts-ignore
  .get(async (req: any, res: any) => {

    //@ts-ignore
    const messages = await pool.query(
      "SELECT M.*, U.USERNAME FROM MESSAGES M, USERS U WHERE U.ID = M.MESSAGEOWNER_ID ORDER BY M.MESSAGE_ID ASC",
      []
    )

    let messagesList: any = []


    for (let i = messages.rowCount - 1; i >= 0; --i) {
      messagesList.push({
        message: messages.rows[i].messagetext,
        owner: messages.rows[i].messageowner_id,
        ownerName: messages.rows[i].username
      })
    }

    const page = req.query.page
    const limit = req.query.limit

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    console.log(startIndex)
    console.log(endIndex)

    const newList = messagesList.slice(startIndex, endIndex)
    console.log(newList)

    res.json(newList)


  })


//ничего не работает с фетчем сообщений

module.exports = router
