import { Image, Text } from '@chakra-ui/react'
import React from 'react'
import {CloseIcon} from '@chakra-ui/icons'

interface Props {
  props: any,
  themeColor:string,
  closePopUp: () => void
}

const PopUp = ({props, themeColor, closePopUp}: Props) => {
  return (
    <div className="popup__wrapper">
      <div className="blur">
      </div>
      <div className="content" style={{
        backgroundColor: themeColor === "dark" ? "#1a202c" : "#fff",
        borderRadius: "15px",
        padding: '15px 15px',
      }}>
        <div style={{
          display: 'flex',
          padding: '0 5px',
          marginBottom: '5px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
        <button onClick={closePopUp}><CloseIcon /></button>
        </div>
        <div className="popup__header" style={{
          display: 'flex'
        }}>
          <Image style={{
            width: '45%',
            height: '20%',
            borderRadius: '15px'
          }} src={props.image}/>
            <div style={{
             fontSize: `${window.innerWidth > 1200 ? 
             `${window.innerWidth/40}px` : 
              `${window.innerWidth/18}px` }`,//`${window.innerWidth/40}px`,
             fontWeight: 1000,
             textTransform: 'uppercase',
             textOverflow: 'break',
             width: '45%',
             display: 'flex',
             //justifyContent:'center',
             alignItems: 'center',
             padding: '0 20px'
          }}>{props.title}</div>
        </div>
        <div>
          <Text>{props.allinfo}</Text>
        </div>
      </div>
    </div>
  )
}

export default PopUp
