import React, { Component } from 'react'; 

import './navbar.css'


class Navbar extends Component {
    menuItem = [
        {
          title: 'Home',
          url: 'homepage',
          cName: 'nav-links'
        },
        {
          title: 'Nutrition',
          url: 'nutrition',
          cName: 'nav-links'
        },
        {
          title: 'Current Item',
          url: 'CurrentItem',
          cName: 'nav-links'
        },
        {
          title: 'I/O History',
          url: 'history',
          cName: 'nav-links'
        },
  
        {
          title: 'About us',
          url: 'aboutus',
          cName: 'nav-links'
        },
      ]
  state = { clicked: false }
 


  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }

  render() {
      return(
          
          <nav className= "NavbarItems">
              <a className="logohref" href ="/homepage"><h1 className="navbar-logo">Easy Trade</h1></a>
              <div className="menu-icon" onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
              <ul className={this.state.clicked ? 'nav-menu active' :'nav-menu'}>
                  {this.menuItem.map((item, index) => {
                      return (
                          <li key={index}>
                              <a className={item.cName} href={item.url}>
                              {item.title}
                              </a>
                          </li>
                      )
                  })}
              </ul>
             
          </nav>
      )
  }
}

export default Navbar;