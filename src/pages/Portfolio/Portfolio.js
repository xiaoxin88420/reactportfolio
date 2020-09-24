import React from 'react'
import Project from '../../Components/Project'
import NutraPrep from './pics/firstproject.jpg'
import RanchHand from './pics/secondproject.jpg'
import EDaBurger from './pics/e-da-burger.jpg'
import weatherApp from './pics/weatherapp.jpg'
import workdayScheduler from './pics/work-day-scheduler.jpg'
import psgen from './pics/psgen.jpg'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const Portfolio = () => {

  let project = [
    {
      title: 'NutraPrep',
      subtitle: 'First Project',
      text: 'This is my first group project of using third party API to retrieve nutricious recipe when searching by keywords.',
      img: NutraPrep,
      link:'https://nicholasd-uci.github.io/manhattanProject/'
    },
    {
      title: 'Ranch-Hand',
      subtitle: 'Second Project',
      text: "This is my second group project of building up our own database by using MySQL as well as setting up routers to practice 'GET', 'POST', 'PUT' and 'DELETE' on data.",
      img: RanchHand,
      link:'https://gentle-taiga-08855.herokuapp.com/index.html'
    },
    {
      title: 'E-Da-Burger',
      subtitle: 'Homework',
      text: "This is a piece of homework to practice building up a local data and maintain it by using 'CRUD' method.",
      img: EDaBurger,
      link: 'https://e-da-burger.herokuapp.com/'
    },
    {
      title: 'WeatherApp',
      subtitle: 'Homework',
      text: 'This is an app that could post the weather for the future five days of a chosen city.',
      img: weatherApp,
      link: 'https://e-da-burger.herokuapp.com/'
    },
    {
      title: 'Workday Scheduler',
      subtitle: 'Homework',
      text: 'This is an app that can save your input event and the color will change by time as a reminder.',
      img: workdayScheduler,
      link: 'https://xiaoxin88420.github.io/WorkScheduler/'
    },
    {
      title: 'Password Generator',
      subtitle: 'Homework',
      text: "This is an interactive password generator. It's fun to try it out.",
      img: psgen,
      link: 'https://xiaoxin88420.github.io/pwgenerator/'
    },
  
  
  ]



  return (
    <>
      <Container>
        <Row>
          <Col>
            <Project project={project[0]} />
          </Col>
          <Col>
            <Project project={project[1]} />
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
            <Project project={project[2]} />
          </Col>
          <Col>
            <Project project={project[3]} />
          </Col>
          <Col>
            <Project project={project[4]} />
          </Col>
          <Col>
            <Project project={project[5]} />
          </Col>
        </Row>
        <br/>
      </Container>
    </>
  )
}

export default Portfolio