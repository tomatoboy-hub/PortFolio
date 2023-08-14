import React from 'react'
import {Card as BootstrapCard} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
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
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
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
      </BootstrapCard.Body>
    </BootstrapCard>
    </Link>
    
  )
}

export default Cards