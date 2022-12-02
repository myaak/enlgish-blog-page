import { Avatar, Box, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { AccountContext } from "./UserContext"

interface Props {
  closePanel: () => void
  themeColor: string
}

const UserPanel = ({closePanel, themeColor}:Props) => {

  const { user, setUser } = useContext(AccountContext)

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
      <div className="userpanel__blur" onClick={closePanel}>
      </div>
      <div className="userpanel__content" style={{
        backgroundColor: themeColor === "dark" ? "#1a202c" : "#fff",
      }}>
        <div className="userpanel__content__info">
          <Avatar src=""/>
          <span>{user.username}</span>
        </div>
          <Button colorScheme={'blue'} type="button" onClick={handleLogOut}>Log Out</Button>
      </div>
    </Box>
  )
}

export default UserPanel
