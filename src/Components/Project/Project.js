import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

const Project = props => {
  return (
    <>

      <Card>
        <CardImg top width="100%" src={props.project.img} alt={props.project.title} />
        <CardBody>
          <CardTitle>{props.project.title}</CardTitle>
          <CardSubtitle>{props.project.subtitle}</CardSubtitle>
          <CardText>{props.project.text}</CardText>
          <Button><a href={props.project.link}>{props.project.title}</a></Button>
        </CardBody>
      </Card>
      
    </>
  )
}

export default Project