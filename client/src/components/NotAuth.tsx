import { Box, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface Props {
  closeAuth: () => void
}
const NotAuth = ({ closeAuth }: Props) => {

  const navigate = useNavigate()

  return (
    <Box className="notauth">
      <Box className="blur"></Box>
      <Box className="notauth__content">
        <div>You need to log in</div>
        <Button
          onClick={() => {
            navigate('/login')
          }}>Login</Button>
        <Button onClick={closeAuth}>Close</Button>
      </Box>
    </Box>
  )
}

export default NotAuth
