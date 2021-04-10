import React, { Component } from 'react'; 
import './navbar.css'



class Navbar extends Component {

  state = { clicked: false }
 



  render() {
      return(
          
          <nav className={"NavbarItems"}>
              <a className="logohref" href ="homepage"><h1 className="navbar-logo">Easy Trade</h1></a>
              <ul className={'nav-menu'}>
                  {this.props.menuItem.map((item, index) => {
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