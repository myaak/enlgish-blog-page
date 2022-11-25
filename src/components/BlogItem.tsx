import {Link, useLocation} from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

interface Props {
  image: string,
  date: string,
  title: string,
  description: string
}

const BlogItem = ({ image, date, title, description }: Props) => {
  const location = useLocation()

  return (
    <Box className="blog-item" style={{
      //width: '400px',
      //height: '400px'
    }}>
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
          <Link to={`${title}`}>{title}</Link>
        </Text>
        <Text className="blog-item__description">
          {description}
        </Text>
      </div>
    </Box>

  )
}

export default BlogItem
