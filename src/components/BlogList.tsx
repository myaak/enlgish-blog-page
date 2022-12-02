import BlogItem from "./BlogItem"

interface Props {
  blogs: Array<Object>
  liked: Array<Object>
  themeColor: string
}

const BlogList = ({ blogs, liked, themeColor }: Props) => {
  return (
    <div className="blog-list">
      <ul>
        {blogs.map((item: any, index: number) => (
          <BlogItem
            key={index}
            props={{
              id: item.id,
              isLiked: liked.filter((liked:any) => liked.blog_id === item.id).length ? true : false,
              image: item.image,
              likes: item.likes,
              title: item.title,
              date: item.date,
              description: item.description,
              content: item.content
            }}
            themeColor={themeColor}
          />
        ))}
      </ul>
    </div>
  )
}


export default BlogList
