import BlogItem from "./BlogItem"

interface Props {
  blogs: Array<Object>
}

const BlogList = ({ blogs }: Props) => {
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
          />
        ))}
      </ul>
    </div>
  )
}


export default BlogList
