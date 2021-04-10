//import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React from 'react';
import './App.css';


import Navbar from "./components/Navbar/navbar"
import AboutUs from "./components/about-us"
import Homepage from './components/homepage/homepage'
import CurrentItem from './currentItem'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      itemstorage: []
    }
  }   


    render(){
      //console.log(this.state.itemstorage.itemName.dataIndex)
      return (
        <>
        <Router>
          <div className="App">
            <Navbar menuItem={this.state.MenuItemsBeforeLogin}
            />

            <div className="content">
              <Switch>
                <Route exact path="/homepage" ><Homepage /> </Route>
                <Route exact path="/currentItem"><CurrentItem/></Route>
                <Route exact path="/history"> </Route>
                <Route exact path="/nutrition"> </Route>
                <Route exact path="/aboutus"> <AboutUs /></Route>

              </Switch>
            </div>
          </div>
        </Router>


        </>


      );
    }
  }

  export default App;
