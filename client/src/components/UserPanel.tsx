import { useState, useContext } from "react"
import { Avatar, Box, Button } from "@chakra-ui/react"
import { AccountContext } from "./UserContext"
import AddTopic from "./AddTopic"
import Dashboard from "./Dashboard"

interface Props {
  closePanel: () => void
  themeColor: string
}

const UserPanel = ({ closePanel, themeColor }: Props) => {

  const { user, setUser } = useContext(AccountContext)

  const [dashboard, setDashboard] = useState<boolean>(false)
  const [topic, setTopic] = useState<boolean>(false)

  const openNewTopic = () => {
    setTopic((prev: boolean) => !prev)
  }

  const openDashboard = () => {
    setDashboard((prev: boolean) => !prev)
  }

  const handleLogOut = async () => {
    await fetch("http://193.201.88.172:7000/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ loggedIn: false, email: null })
    })
      .catch(err => {
        console.log(err)
        return
      })
      .then(res => {
        if (!res || !res.ok) {
          return
        }
        return res.json()
      })
      .then(data => {
        setUser({ ...data })
        closePanel()
      })
  }

  return (
    <Box className="userpanel">
      {dashboard && <Dashboard themeColor={themeColor} />}
      {topic && <AddTopic themeColor={themeColor} closeAddition={openNewTopic} />}
      <div className="userpanel__blur" onClick={closePanel}>
      </div>
      <div className="userpanel__content" style={{
        backgroundColor: themeColor === "dark" ? "#1a202c" : "#fff",
      }}>
        <div className="userpanel__content__info">
          <Avatar src="" />
          <span>{user.username}</span>
        </div>
        {user.isAdmin &&
          <Button colorScheme={'blue'} type="button" onClick={openNewTopic}>Create new blog</Button>
        }
        <Button colorScheme={'blue'} type="button" onClick={openDashboard}>Dashboard</Button>
        <Button colorScheme={'blue'} type="button" onClick={handleLogOut}>Log Out</Button>
      </div>
    </Box>
  )
}

export default UserPanel
