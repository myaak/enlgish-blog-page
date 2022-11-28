import { Modal } from '@chakra-ui/react'
import { useState, Fragment } from 'react'
import { PopUp } from '../components'
import BlogList from '../components/BlogList'

interface Props {
  themeColor: string
}


const Blog = ({ themeColor }: Props) => {
  const [blogs, setBlogs] = useState<Array<Object>>([
    {
      image: "kettle.jpg",
      date: "25th of November",
      title: "Gleb's bash and a teapot",
      description: "In the early morning Gleb has done an unreal bash and got in trouble."
    },
    {
      date: "25th of November",
      title: "Gleb's bash and a teapot",
      description: "In the early morning Gleb has done an unreal bash and got in trouble."
    },
    {
      date: "25th of November",
      title: "Gleb's bash and a teapot",
      description: "In the early morning Gleb has done an unreal bash and got in trouble."
    },
    {
      date: "25th of November",
      title: "Gleb's bash and a teapot",
      description: "In the early morning Gleb has done an unreal bash and got in trouble."
    },
    {
      date: "25th of November",
      title: "Gleb's bash and a teapot",
      description: "In the early morning Gleb has done an unreal bash and got in trouble."
    },
    {
      date: "25th of November",
      title: "Gleb's bash and a teapot",
      description: "In the early morning Gleb has done an unreal bash and got in trouble."
    }
  ])

  const [openPop, setOpenPop] = useState<boolean>(false)


  return (
    <div className="blogpage">
      <div style={{
        fontSize: "100px",
        fontWeight: 1000,
        //height: window.innerHeight * 0.25, //300px 
        backgroundColor: "#0fa1ff",//"#4411ff",
        padding: `20px ${window.innerWidth / 19}px`,
        // textAlign: 'center'
      }}>
        210NEWSROOM
      </div>
      <div className="blogpage__container">
        <BlogList
          blogs={blogs}
          themeColor={themeColor}
        />
      </div>
    </div >
  )
}

export default Blog
