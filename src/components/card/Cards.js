import React ,{ useState } from 'react'
import {Card as BootstrapCard,Modal,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Cards(props) {
    const {
        imgSrc,
        title,
        text,
        children,
        link,
        ...otherProps
    } = props; 
    const [showModal,setShowModal] = useState(false);
  return (
    <>
    <BootstrapCard {...otherProps}>
      {
        imgSrc && (
          <BootstrapCard.Img variant="top" src={imgSrc} />
        )
      }
      <BootstrapCard.Body>
        {
          title && (
            
            <BootstrapCard.Title>
              {title}
            </BootstrapCard.Title>
          )
        }
        {
          text && (
            <BootstrapCard.Text>
              {text}
            </BootstrapCard.Text>
          )
        }
        {children}
        <Button onClick={() => setShowModal(true)}>詳細</Button>
      </BootstrapCard.Body>
    </BootstrapCard>
    
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imgSrc} alt={title} style={{width:'100%'}}/>
        {text}
      </Modal.Body>
      <Modal.Footer>
      <a href={link} target="_blank" rel="noopener noreferrer">
          <Button>リンク</Button>
        </a>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          閉じる
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Cards