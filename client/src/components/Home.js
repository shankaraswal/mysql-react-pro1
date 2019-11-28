import React, { Component } from 'react';
import axios from 'axios';
import SiteLoader from './Loader';
import { NavLink, Link } from 'react-router-dom'

class Home extends Component {

    componentDidMount(){
       
    }

  render() {
   
    return (
      <div className="container">
    
         <div className="jumbotron">
            <h1 className="display-4 ">Home Updated!</h1>

            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.
                </p>
                <ul>
                    <li>
                        <NavLink to="/orders">Order List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addorder">Add Order</NavLink>
                    </li>
                    <li>
                        <span>Customer List</span>
                    </li>
                </ul>

        </div>
     
      </div>
    );
  }}

export default Home;
