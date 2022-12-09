import { useContext, useEffect, useState } from 'react'
import BlogList from '../components/BlogList'
import { AccountContext } from '../components/UserContext'

interface Props {
  themeColor: string
}


const Blog = ({ themeColor }: Props) => {
  const [blogs, setBlogs] = useState<Array<Object>>([])
  const [likes, setLikes] = useState<Array<Object>>([])
  const [comments, setComments] = useState<Array<Object>>([])
  const { user, setUser } = useContext(AccountContext)



  const getLikes = async () => {
    await fetch(`http://193.201.88.172:7000/likes/auth?email=${user.email}`, {
      credentials: "include",
    })
      .catch(err => {
        console.log(err)
        return
      })
      .then(res => {
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
        setLikes([...data])
      })
  }

  const getComments = async () => {
    await fetch('http://193.201.88.172:7000/comments', {
      credentials: "include",
    })
      .catch(err => {
        return
      })
      .then(res => {
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
        setComments([...data])
      })
  }


  useEffect(() => {
    fetch('http://193.201.88.172:7000/blogs', {
      credentials: "include"
    })
      .catch(err => {
        return
      })
      .then(res => {
        if (!res || !res.ok) {
          return
        }
        return res.json()
      })
      .then((data) => {
        if (!data) {
          return
        }
        setBlogs([...data])
        getComments()
        if (user.loggedIn)
          getLikes()
      })
  }, [])


  return (
    <div className="blogpage">
      <div className="blogpage__banner" style={{
      }}>
        210NEWSROOM
      </div>
      <div className="blogpage__container">
        <BlogList
          comments={comments}
          blogs={blogs}
          liked={likes}
          themeColor={themeColor}
        />
      </div>
    </div >
  )
}

export default Blog
