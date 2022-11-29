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
            props={{
              image: item.image,
              title: item.title,
              date: item.date,
              description: item.description,
              allinfo: item.allinfo,
              allinfo2: item.allinfo2,
              allinfo3: item.allinfo3
            }}
            description={item.description}
            themeColor={themeColor}
          />
        ))}
      </ul>
    </div>
  )
}


export default BlogList
