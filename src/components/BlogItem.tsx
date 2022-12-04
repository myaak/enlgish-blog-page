import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Box, Text, useForceUpdate } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import PopUp from './PopUp'
import { AccountContext } from './UserContext'

interface Props {
  props: any,
  themeColor: string
}

const BlogItem = ({ props, themeColor }: Props) => {

  const [openPop, setOpenPop] = useState<boolean>(false)
  const { user } = useContext(AccountContext)
  const [liked, setLiked] = useState<boolean>(props.isLiked)

  const [clicked, setClicked] = useState<boolean>(false)

  const navigate = useNavigate()

  console.log(liked)

  useEffect(() => {

  },[liked])

  const handleLikePost = async () => {
    if (!user.loggedIn) {
      navigate('/login')
      return;
    }
     await fetch('http://193.201.88.172:7000/likes/liked', {
       method: "POST",
       credentials: "include",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({ email: user.email, blog_id: props.id })
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
        setLiked(data.response)
     })
    .finally(() => {
    })


  }

  return (
    <Box className="blog-item"
      style={{
        paddingTop: '10px',
        paddingBottom: '10px',
        borderRadius: '15px'
      }}
      _hover={{
        cursor: 'pointer',
        backgroundColor: themeColor === "dark" ? "#3A3C4E" : "#d2d4d6"
      }}
    >
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
      }} >
        <div className="blog-item__logo" style={{
        }}
          onClick={() => setOpenPop((prev: boolean) => !prev)}
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
            onClick={() => setOpenPop((prev: boolean) => !prev)}
          >
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
            </div>
          </div>
          <Box style={{ display: 'flex', gap: '5px', alignItems: 'center' }} 
            className="blog-item__like-icon" 
            _hover={{
              cursor: 'pointer',
              backgroundColor: themeColor === "dark" ? "#3A3C4E" : "#d2d4d6"
            }}
            onClick={() => handleLikePost()}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill={`${props.isLiked ? "red" : "none"}`} stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
              </path>
            </svg>
            <div>{props.likes}</div>
          </Box>
        </div>
      </div>
    </Box>

  )
}

export default BlogItem
