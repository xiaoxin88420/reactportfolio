import React from 'react'
import modifyport1 from './pics/modifyport1.jpg'
import port2 from './pics/port2.jpg'
import port3 from './pics/port3.jpg'
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

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src={modifyport1} alt="Card image cap" />
              <CardBody>
                <CardTitle>My family</CardTitle>
                <CardText>I believe Legoland is the place I've been to most of the time since my son loves going there.</CardText>
                <Button>No where</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={port2} alt="Card image cap" />
              <CardBody>
                <CardTitle>Milestone</CardTitle>
                <CardText>Very precious photo with my previous CEO. This is a significant milestone of my lifelong career.</CardText>
                <Button>No where</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={port3} alt="Card image cap" />
              <CardBody>
                <CardTitle>New Journey</CardTitle>
                <CardText>I decided to work on my own and catch the best opportunity of my life.</CardText>
                <Button href='https://www.jeansonher.com' target='_blank'>My Store</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home