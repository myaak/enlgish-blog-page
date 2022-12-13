import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Box, Text, useForceUpdate } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import PopUp from './PopUp'
import { AccountContext } from './UserContext'
import { borderRadius } from '@mui/system'

interface Props {
  props: any,
  themeColor: string
}

const StatsBlogItem = ({ props, themeColor }: Props) => {

  const [likesCounter, setLikesCounter] = useState<number>(props.likes)

  return (
    <Box className="blog-item" style={{
      margin: '0 auto'
    }}
    >
      <Box className="blog-item"
        style={{
          width: '100%', //tyt nado flex dat v css
          height: '100%',
          paddingTop: '10px',
          borderRadius: '15px'
        }}
        _hover={{
          cursor: 'pointer',
          backgroundColor: themeColor === "dark" ? "#3A3C4E" : "#d2d4d6"
        }}
      >
        <div className="blog-item__container" style={{
          width: '100%',
          height: '100%'
        }} >
          <div className="blog-item__logo" style={{
          }}
          >
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
          }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Text _hover={{
                color: "#03a9f4",
                cursor: 'pointer'
              }}
                className="blog-item__title">
                {props.title}
              </Text>
            </div>
            {props.likes ?
              <Text>Likes: {props.likes}</Text>
              :
              <Text>Comments: {props.comments}</Text>
            }
          </div>
        </div>
      </Box>
    </Box>

  )
}

export default StatsBlogItem
