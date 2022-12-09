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

const BlogItem = ({ props, themeColor }: Props) => {

  const [openPop, setOpenPop] = useState<boolean>(false)
  const { user } = useContext(AccountContext)
  const [liked, setLiked] = useState<boolean>(props.isLiked)
  const [likesCounter, setLikesCounter] = useState<number>(props.likes)


  const navigate = useNavigate()



  useEffect(() => {
    setLiked(props.isLiked)

  }, [props.isLiked])

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
        if (data.response) {
          setLikesCounter((prev) => prev + 1)
        }
        else {
          setLikesCounter((prev) => prev - 1)
        }
      })
      .finally(() => {
      })
  }

  const handleOpenClosePop = () => {
    setOpenPop((prev:boolean) => !prev)
  }

  return (
    <Box className="blog-item" style={{
      margin:'0 auto'
    }}
    >
      {openPop &&
        <PopUp
          props={{ id: props.id, image: props.image, title: props.title, content: props.content }}
          closePopUp={() => setOpenPop(false)}
          themeColor={themeColor}
        />
      }
    <Box className="blog-item"
      style={{
        width: '90%',
        height: '90%',
        paddingTop: '10px',
        borderRadius: '15px'
      }}
      _hover={{
        cursor: 'pointer',
        backgroundColor: themeColor === "dark" ? "#3A3C4E" : "#d2d4d6"
      }}
      onClick={handleOpenClosePop}
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
        </div>
      </div>
    </Box>
      <Box className="blog-item__info"
        _hover={{
        }}
        style={{ 
          display: 'flex', 
          gap: '5px',
          flexDirection: 'row',  
          justifyContent: 'space-between',
          margin: '0 auto'
      }}
       >
        <div style={{display: 'flex'}}
        onClick={handleLikePost}
        >
          <Box style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '5px 5px',
            borderRadius: '15px'
          }}
            _hover={{
              cursor: 'pointer',
              backgroundColor: themeColor === "dark" ? "#3A3C4E" : "#d2d4d6"
            }}

          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill={`${liked ? "red" : "none"}`} strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
              </path>
            </svg>
            <div>{likesCounter}</div>
          </Box>
        </div>
          <Box style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          padding: '5px 5px',
          borderRadius: '15px'
        }}
          _hover={{
            cursor: 'pointer',
            backgroundColor: themeColor === "dark" ? "#3A3C4E" : "#d2d4d6"
          }}
          onClick={() => {
              setOpenPop((prev) => !prev)
          }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
            </path>
          </svg>
          <div>{
            props.commentsCounter[0]?.overall ? props.commentsCounter[0]?.overall : 0}</div>
        </Box>
      </Box>
</Box>

  )
}

export default BlogItem
