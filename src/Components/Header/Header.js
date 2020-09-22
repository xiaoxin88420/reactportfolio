import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../../pages/Home'
import Portfolio from '../../pages/Portfolio'
import Contact from '../../pages/Contact'
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

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Router>
      <div>
        <Navbar color="skyblue" light expand="md">
          <NavbarBrand href="/">MaxHub</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link to='/'>Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/portfolio'>Portfolio</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/contact'>Contact</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  )
}

export default Header