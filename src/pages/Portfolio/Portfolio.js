import React from 'react'
import NutraPrep from './pics/firstproject.jpg'
import RanchHand from './pics/secondproject.jpg'
import EDaBurger from './pics/e-da-burger.jpg'
import weatherApp from './pics/weatherapp.jpg'
import workdayScheduler from './pics/work-day-scheduler.jpg'
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

const Portfolio = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src={NutraPrep} alt="Card image cap" />
              <CardBody>
                <CardTitle>NutraPrep</CardTitle>
                <CardSubtitle>First Project</CardSubtitle>
                <CardText>This is my first group project of using third party API to retrieve nutricious recipe when searching by keywords.</CardText>
                <Button><a href='https://nicholasd-uci.github.io/manhattanProject/'>NutraPrep</a></Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={RanchHand} alt="Card image cap" />
              <CardBody>
                <CardTitle>Ranch-Hand</CardTitle>
                <CardSubtitle>Second Project</CardSubtitle>
                <CardText>This is my second group project of building up our own database by using MySQL as well as setting up routers to practice 'GET', 'POST', 'PUT' and 'DELETE' on data.</CardText>
                <Button><a href='https://gentle-taiga-08855.herokuapp.com/index.html'>Ranch-Hand</a></Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Coming soon</CardTitle>
                <CardSubtitle>Third Project</CardSubtitle>
                <CardText>This is my third group project. We're planning to build an app for users to find party catering/dj/entertainment supplies all in one stop.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src={EDaBurger} alt="Card image cap" />
              <CardBody>
                <CardTitle>E-Da-Burger</CardTitle>
                <CardSubtitle>Homework</CardSubtitle>
                <CardText>This is a piece of homework to practice building up a local data and maintain it by using 'CRUD' method.</CardText>
                <Button><a href='https://e-da-burger.herokuapp.com/'>E-Da-Burger</a></Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={weatherApp} alt="Card image cap" />
              <CardBody>
                <CardTitle>WeatherApp</CardTitle>
                <CardSubtitle>Homework</CardSubtitle>
                <CardText>This is an app that could post the weather for the future five days of a chosen city.</CardText>
                <Button><a href='https://e-da-burger.herokuapp.com/'>WeatherApp</a></Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={workdayScheduler} alt="Card image cap" />
              <CardBody>
                <CardTitle>Workday Scheduler</CardTitle>
                <CardSubtitle>Homework</CardSubtitle>
                <CardText>This is an app that can save your input event and the color will change by time as a reminder.</CardText>
                <Button><a href='https://xiaoxin88420.github.io/WorkScheduler/'>Workday Scheduler</a></Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Portfolio