import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import PopUp from './PopUp'

interface Props {
  props: any,
  description: string,
  themeColor: string
}

const BlogItem = ({ props, description, themeColor }: Props) => {
  const location = useLocation()

  const [openPop, setOpenPop] = useState<boolean>(false)

  return (
    <Box className="blog-item" >
      {openPop &&
        <PopUp
          props={{ image: props.image, title: props.title, allinfo: props.allinfo, allinfo2: props.allinfo2, allinfo3: props.allinfo3 }}
          closePopUp={() => setOpenPop((prev: boolean) => !prev)}
          themeColor={themeColor}
        />
      }
      <div className="blog-item__container" style={{
        width: '100%',
        height: '100%'
      }} onClick={() => setOpenPop((prev: boolean) => !prev)}>
        <div className="blog-item__logo" style={{
        }}>
        <Image style={{
          width: '400px',
          height: '225px',
          borderRadius: '15px',
          objectFit: 'cover'
        }}
          _hover={{
            transform: 'scale(1.5)'
          }}
          src={props.image} />
        </div>
        <div className="blog-item__info" style={{
          marginTop: '5px'
        }}>
          <Text className="blog-item__date">
            {props.date}
          </Text>
          <Text _hover={{
            color: "#03a9f4",
            cursor: 'pointer'
          }}
            className="blog-item__title">
            {props.title}
          </Text>
          <Text className="blog-item__description">
            {props.description}
          </Text>
        </div>
      </div>
    </Box>

  )
}

export default BlogItem
