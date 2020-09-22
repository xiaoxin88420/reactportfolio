import React from 'react'
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
              <CardImg top width="100%" src="../../assets/pics/modifyport1.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>My family</CardTitle>
                <CardText>I believe Legoland is the place I've been to most of the time since my son loves going there.</CardText>
                <Button>No where</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="../../assets/pics/port2.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Milestone</CardTitle>
                <CardText>Very precious photo with my previous CEO. This is a significant milestone of my lifelong career.</CardText>
                <Button>No where</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="../../assets/pics/port3.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>New Journey</CardTitle>
                <CardText>I decided to work on my own and catch the best opportunity of my life.</CardText>
                <Button><a href='https://www.jeansonher.com'>My Store</a></Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home