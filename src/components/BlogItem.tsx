
import {Box} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

interface Props {
  colorMode:any,
}

const BlogItem = ({colorMode}:Props) => {
  return (
    <Box style={{
      backgroundColor: colorMode === "dark" ? '#fff' : 'blue'
    }}>
      <Image  style={{
        width: '350px',
        height: '275px'
      }}
        src={"animeBLUE.jpg"} />
    </Box>

  )
}

export default BlogItem
