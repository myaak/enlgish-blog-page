import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import PopUp from './PopUp'
import { AccountContext } from './UserContext'

interface Props {
  props: any,
  themeColor: string
}

const BlogItem = ({ props, themeColor }: Props) => {

  const [openPop, setOpenPop] = useState<boolean>(false)
  const {user} = useContext(AccountContext)

  const handleLikePost = async() => {
    if(!user.loggedIn) {
      return;
    }

    await('')
  }

  console.log(props.liked)
  return (
    <Box className="blog-item" >
      {openPop &&
        <PopUp
          props={{ image: props.image, title: props.title, content: props.content }}
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
            <div className="blog-item__like" style={{
            display: 'flex',
            gap: '10px'
          }}>
            <div className="blog-item__like-icon" onClick={handleLikePost}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill={`${props.isLiked ? "red" : "none"}`} stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
            </path>
            </svg>
            </div>
              <div>{props.likes}</div>
          </div>
        </div>
      </div>
    </Box>

  )
}

export default BlogItem
