import { useState } from 'react'
import BlogList from '../components/BlogList'


const Blog = () => {
  const themeColor = "light"
  const [blogs, setBlogs] = useState<Array<Object>>([
    {
      image: "kettle.jpg",
      date: "",
      title: "",
      description: ""
    },
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

  return (
    <div className="blogpage">
      <div style={{
        fontSize: "100px",
        fontWeight: 1000,
        height: '300px',
        paddingTop: '20px',
        backgroundColor: "#da86a8"
      }}>
        Newsroom
      </div>
      <div className="blogpage__container">
        <BlogList
          blogs={blogs}
        />
      </div>
    </div>
  )
}

export default Blog
