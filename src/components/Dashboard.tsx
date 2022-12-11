import { Box, Text, theme } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts'
import StatsBlogItem from "./StatsBlogItem"

interface Props {
  themeColor: string
}

const Dashboard = ({themeColor}:Props) => {

  const [likes, setLikes] = useState<Array<Object>>([])
  const [users, setUsers] = useState<Array<Object>>([])
  const [blogs, setBlogs] = useState<Array<Object>>([])

  //const data = [{date: 9, likes: 3},{date: 10, likes: 5}, {date: 11, likes:6}]
  //const users = [{date: 9, users: 4},{date: 10, users: 5}, {date: 11, users: 10}]
  

  const getLikesPerMonth = async() => {
    await fetch("http://193.201.88.172:7000/stats/likes", {
      credentials: "include",
    })
    .catch((err) => console.log(err))
    .then((res) => {
      if(!res || !res.ok) {
        return
      }
      return res.json()
    })
    .then((data) => {
      if(!data) {
        return
      }
      setLikes(data)
    })
  }

  const getUsersPerMonth = async() => {
    await fetch("http://193.201.88.172:7000/stats/users", {
      credentials: "include",
    })
    .catch((err) => console.log(err))
    .then((res) => {
      if(!res || !res.ok) {
        return
      }
      return res.json()
    })
    .then((data) => {
      if(!data) {
        return
      }
      setUsers(data)
    })
  }

  const getMostPosts = async() => {
    await fetch("http://193.201.88.172:7000/stats/blogsLike", {
      credentials: "include",
    })
    .catch((err) => console.log(err))
    .then((res) => {
      if(!res || !res.ok) {
        return
      }
      return res.json()
    })
    .then((data) => {
      if(!data) {
        return
      }
      setBlogs(data)
    })

    await fetch("http://193.201.88.172:7000/stats/blogsComment", {
      credentials: "include",
    })
    .catch((err) => console.log(err))
    .then((res) => {
      if(!res || !res.ok) {
        return
      }
      return res.json()
    })
    .then((data) => {
      if(!data) {
        return
      }
      setBlogs((old:any) => [...old, {...data}])
    })
  }

  useEffect(() => {
    getLikesPerMonth()
    getUsersPerMonth()
    getMostPosts()
  },[])

  return (
    <Box className="dashboard">
      <Box className="blur"></Box>
      <Box className="dashboard__content"
      >
        <Box className="dashboard__content__wrapper" style={{
          display: 'flex',
          overflowX: 'hidden',
          overflowY: 'scroll',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: themeColor === "dark" ? "#1a202c" : "#fff",
        }}>
          <Box style={{
            textAlign: 'center',
            fontWeight: 700,
            textTransform: 'uppercase',
            fontSize: '20px'
          }}>Statistics</Box>
          <Box className="dashboard__content__posts"
            style={{
              display: 'flex',
              gap: '15px',
              padding: '15px 0px'
            }}>
            <Box>
              <Box>
                The most liked post
              </Box>
              <StatsBlogItem 
                props={{
                  image: 'snow.jpg',
                  title: 'Gleb with snow is a nightmare',
                  likes: 123
                }}
                themeColor={themeColor}
              />
          </Box>
            <Box>
              <Box>
                The most commented post
              </Box>
            <StatsBlogItem 
              props={{
                image: 'snow.jpg',
                title: 'Gleb with snow is a nightmare',
                comments: 123
              }}
              themeColor={themeColor}/>
          </Box>
          </Box>
          <Box className="dashboard__content__charts"
          style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
           <Box className="dashboard__content__likes">
             <Box style={{textAlign: 'center'}}>Likes this month</Box>
             <LineChart width={500} height={300} data={likes}>
               <XAxis dataKey="date"/>
               <YAxis />
               <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
               <Line type="monotone" dataKey="likes" stroke={themeColor === "dark" ? "#fff" : "#333"}/>
               <Tooltip />
             </LineChart>
           </Box>
           <Box className="dashboard__content__users">
             <Box style={{textAlign: 'center'}}>Users this month</Box>
             <LineChart width={500} height={300} data={users}>
               <XAxis dataKey="date"/>
               <YAxis />
               <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
               <Line type="monotone" dataKey="users" stroke={themeColor === "dark" ? "#fff" : "#333"}/>
               <Tooltip />
             </LineChart>
           </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
