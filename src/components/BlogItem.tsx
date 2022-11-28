import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import PopUp from './PopUp'

interface Props {
  image: string,
  date: string,
  title: string,
  description: string,
  themeColor: string
}

const BlogItem = ({ image, date, title, description, themeColor }: Props) => {
  const location = useLocation()

  const [openPop, setOpenPop] = useState<boolean>(false)

  return (
    <Box className="blog-item" >
      {openPop &&
        <PopUp
          props={{ image: image, title: title, allinfo: 'here we go' }}
          closePopUp={() => setOpenPop((prev: boolean) => !prev)}
          themeColor={themeColor}
        />
      }
      <div style={{
        width: '100%',
        height: '100%'
      }} onClick={() => setOpenPop((prev: boolean) => !prev)}>
        <Image style={{
          width: '400px',
          height: '225px',
          borderRadius: '15px'
        }}
          src={image} />
        <div className="blog-item__info">
          <Text className="blog-item__date">
            {date}
          </Text>
          <Text _hover={{
            paddingTop: '2px'
          }}
            className="blog-item__title">
            {title}
          </Text>
          <Text className="blog-item__description">
            {description}
          </Text>
        </div>
      </div>
    </Box>

  )
}

export default BlogItem
