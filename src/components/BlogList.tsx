import BlogItem from "./BlogItem"

interface Props {
  blogs: Array<Object>
  themeColor: string
}

const BlogList = ({ blogs, themeColor }: Props) => {
  return (
    <div className="blog-list">
      <ul>
        {blogs.map((item: any, index: number) => (
          <BlogItem
            key={index}
            image={item.image}
            date={item.date}
            title={item.title}
            description={item.description}
            themeColor={themeColor}
          />
        ))}
      </ul>
    </div>
  )
}


export default BlogList
