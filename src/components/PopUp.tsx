import { Image, Text } from '@chakra-ui/react'
import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'

interface Props {
  props: any,
  themeColor: string,
  closePopUp: () => void
}

const PopUp = ({ props, themeColor, closePopUp }: Props) => {

  return (
    <div className="popup__wrapper">
      <div className="blur" onClick={closePopUp}>
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
          }} src={props.image} />
          <div style={{
            fontSize: `${window.innerWidth > 1200 ?
              `${window.innerWidth / 40}px` :
              `${window.innerWidth / 18}px`}`,//`${window.innerWidth/40}px`,
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
        <div style={{
          padding: '15px 10px',
          fontSize: '20px',
          lineHeight: '2em'
        }}>
          
          <p>...{props.allinfo}</p>
          {
            props.allinfo2 &&
            <p>...{props.allinfo2}</p>
          }
          {
            props.allinfo3 && 
            <p>...{props.allinfo3}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default PopUp
