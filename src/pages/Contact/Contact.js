import React from 'react'
import './Contact.css'
import aboutme from './pics/aboutme.jpg'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'

const Contact = () => {
  return (
    <>
    <Container>
      <Row>
        <Col>
          <Card>
            <CardImg top width="100%" src={aboutme} alt="About Me" />
            <CardBody>
              <CardTitle>About Me</CardTitle>
              <CardText>
                Hi, welcome to Max's Hub. Unfortunately I'm not available right now. Please feel free to leave a message after the 'beep'.<br/><br/> "Beep!"
              </CardText>
              <hr/>
              <CardText>
                  Email: xiaoxin88420@hotmail.com<br/>Cell: 717-880-9938<br/><br/>More social media links at the footer.Please feel free to hop in.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    <br/>
    <br/>
    </>
  )
}

export default Contact