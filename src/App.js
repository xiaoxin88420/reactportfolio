import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'


const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return(
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MaxHub</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link to='/'>Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/login'>Login</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/contact'>Contact</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
