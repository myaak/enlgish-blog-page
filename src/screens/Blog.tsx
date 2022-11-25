import { useContext } from 'react'
import { BlogItem } from '../components'


const Blog = () => {
  const themeColor = useContext()

  return (
    <div>
      <BlogItem
        colorMode={themeColor}
      />
    </div>
  )
}

export default Blog
