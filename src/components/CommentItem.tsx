import { Avatar, Box, Button } from '@chakra-ui/react'

interface Props {
  image: string,
  username: string,
  content: string
}

const CommentItem = ({ image, username, content }: Props) => {
  return (
    <Box style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      height: 'max-content'
    }}>
      <div style={{

      }}>
        <Avatar src={image} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          fontWeight: 1000
        }}>{username}</div>
        <div style={{
          fontSize: '15px'
        }}>
          {content}
        </div>
        <div>
          <Button style={{
            fontSize: '14px'
          }} variant={'unstyled'}>Reply</Button>
        </div>
      </div>
    </Box>
  )
}

export default CommentItem
