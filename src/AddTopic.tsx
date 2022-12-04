import {FormEvent, useState} from 'react'
import {Box, Button, Input, Textarea} from '@chakra-ui/react'

interface Props {
  themeColor: string
  closeAddition: () => void
}

const AddTopic = ({themeColor, closeAddition}: Props) => {

  const [title, setTitle] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [afterPost, setAfterPost] = useState<any>('')


  const postNewTopic = async(e: FormEvent) => {
    e.preventDefault()
    await fetch('http://193.201.88.172:7000/post/newtopic', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          title: title, 
          image: image,
          description: description,
          content: content
        }
      )
    })
    .catch((err) => {
      console.log(err) 
      return
    })
    .then((res) => {
      if(!res|| !res.ok) {
        return
      }
      return res.json()
    })
    .then((data) => {
      setAfterPost({...data})
    })
  }

  return (
    <Box className="addtopic">
      <div className="userpanel__blur">
      </div>
      {afterPost.ok &&
        <div >

        </div>
      }
      <div className="addtopic__content" style={{
        backgroundColor: themeColor === "dark" ? "#1a202c" : "#fff",
      }}>
        <div className="addtopic__form">
          <form onSubmit={postNewTopic}>
            <div>Add new topic</div>
            <Input  placeholder="New topic title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Input  placeholder="New topic image" value={image} onChange={(e) => setImage(e.target.value)}/>
            <Input  placeholder="New topic description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <Textarea placeholder="New topic content" value={content} onChange={(e) => setContent(e.target.value)}/>

            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <Button style={{
                width: '125px'
              }} colorScheme={'blue'} type="submit">Add</Button>
              <Button style={{
                width: '125px'
              }} colorScheme={'blue'} type="button" onClick={closeAddition}>Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </Box>
  )
}

export default AddTopic
