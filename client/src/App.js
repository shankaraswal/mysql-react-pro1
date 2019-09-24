import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import OrderList from './components/OrderlList'
import About from './components/About'
import AddOrder from './components/AddOrder'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/orders" component={OrderList} />
            <Route path="/addorder" component={AddOrder} />
            
          </Switch>
        </div>
        <Footer />
        </Router>
      </>
    );
  }
}

export default App;