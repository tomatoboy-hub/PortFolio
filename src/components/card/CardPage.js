import React from 'react'
import Cards from './Cards'
import {
    Container,
    Row,
    Col,
  } from 'react-bootstrap';

function CardPage({projects}) {
  return (
    <div className="m-5">
      <Container>
        <Row sm={4}>
          {projects.map((project) =>(
        <Col key={project.title}>
          <Cards
            imgSrc={project.imgSrc}
            title={project.title}
            text={project.text}
            link={project.link}
          />
        </Col>   
          ))}
        </Row>
      </Container>
    </div >

  )
}

export default CardPage