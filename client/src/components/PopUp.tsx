import { FormEvent, useContext, useEffect, useState, useRef } from 'react'
import { Image, Textarea, Button } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import CommentItem from './CommentItem'
import {ArrowRightIcon} from '@chakra-ui/icons'
import { AccountContext } from './UserContext'
import NotAuth from './NotAuth'

interface Props {
  props: any,
  themeColor: string,
  closePopUp: () => void,
}

const PopUp = ({ props, themeColor, closePopUp }: Props) => {

  const {user} = useContext(AccountContext)

  const [unAuth, setUnAuth] = useState<boolean>(false)
  const [commentsArray, setCommentsArray] = useState<Array<Object>>([])
  const [commentText, setCommentText] = useState<string>('')

  const top = useRef<null | HTMLDivElement>(null)
  const bottom = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    handleLoadComments()

  }, [])

  const redirectFromItem = () => {
  }

  const handleScrollAfterPost = () => {
      setTimeout(() => {
        if(bottom.current) {
          bottom.current.scrollIntoView({behavior: 'smooth'})
        }
      },500)
  }

  const handlePostComment = async(event: FormEvent) => {
    event.preventDefault()
    if(!user.loggedIn) {
      setUnAuth(true)
      return
    }
    if(commentText === '') {
      return
    }

    await fetch('http://193.201.88.172:7000/comments/postComment', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: user.email, blog_id: props.id, content: commentText })
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
        setCommentsArray((old) => [...old, 
        {
          owner_username: user.username,
          content: commentText,
        }
      ])
      setCommentText('')
      handleScrollAfterPost()
      })
      .finally(() => {
      })
  }


  const handleLoadComments = async () => {
    await fetch(`http://193.201.88.172:7000/comments/blogComments?blog_id=${props.id}`, {
      credentials: "include",
    })
      .catch(err => {
        console.log(err)
        return
      })
      .then(res => {
        console.log()
        if (!res || !res.ok) {
          console.log('not ok')
          return
        }
        return res.json()
      })
      .then((data) => {
        if (!data) {
          return
        }
        setCommentsArray([...data])
        console.log(data)
      })
  }

  return (
    <div className="popup__wrapper">
      {unAuth && <NotAuth closeAuth={() => setUnAuth((prev:boolean) => !prev)}/>}
      <div className="blur" onClick={closePopUp}>
      </div>
      <div className="content" style={{
        backgroundColor: themeColor === "dark" ? "#1a202c" : "#fff",
        borderRadius: "15px",
        padding: '15px 15px',
      }}>
        <div style={{
          display: 'flex',
          padding: '0 5px',
          marginBottom: '5px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          <button onClick={closePopUp}><CloseIcon /></button>
        </div>
        <div className="popup__header" style={{
          display: 'flex'
        }}>
          <Image style={{
            width: '45%',
            height: '20%',
            borderRadius: '15px'
          }} src={props.image} />
          <div style={{
            fontSize: `${window.innerWidth > 1200 ?
              `${window.innerWidth / 40}px` :
              `${window.innerWidth / 18}px`}`,//`${window.innerWidth/40}px`,
            fontWeight: 1000,
            textTransform: 'uppercase',
            textOverflow: 'break',
            width: '45%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px'
          }}>{props.title}</div>
        </div>
        <div style={{
          padding: '15px 10px',
          fontSize: '20px',
          lineHeight: '2em'
        }}>
          {
            props.content.map((item: any, index: number) => (
              <p key={index}>...{item}</p>
            ))
          }
        </div>
        <div className="comments-block">
          <span style={{fontWeight:500}}>Comments</span>
          <ul style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div ref={top}></div>
          {commentsArray.map((item:any, index:number) => (
            <CommentItem key={index} 
                image={item.image}
                username={item.owner_username}
                content={item.content}
            />
          ))}
            <div ref={bottom}></div>
          </ul>
            <form style={{display: 'flex', alignItems: 'center', gap: '10px'}}
          onSubmit={handlePostComment}>
            <Textarea placeholder="Enter your comment" 
                onKeyDown={(key) => {
              if(key.keyCode === 13 && !key.shiftKey) {
                  handlePostComment(key)
              }
            }} style={{
              resize: 'none'
            }} height={100}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <Button type="submit" style={{
              borderRadius: '50%'
            }}><ArrowRightIcon/></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopUp
