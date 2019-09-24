import React, { Component } from 'react';
import axios from 'axios';
import SiteLoader from './Loader';
import { NavLink, Link } from 'react-router-dom'

class Home extends Component {
    
  render() {
    return (
      <div className="container">
      <div className="jumbotron">
            <form id="myForm" className="col-sm-12  alert alert-info border border-info" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="fname" 
                            name="fname" 
                            placeholder="First Name"
                            
                            />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lname" 
                            name="lname" 
                            placeholder="Last Name" 
                            
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            placeholder="Email Address" 
                            
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Phone Number</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="phone" 
                            name="phone" 
                            placeholder="Phone Number" 
                            
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>City</label>
                        <input 
                            type="text" 
                            name="city" 
                            className="form-control" 
                            id="city" 
                            
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>State</label>
                        <select id="state" name="state" className="form-control" >
                            <option defaultValue="">Select State</option>
                            <option value="DL">Delhi</option>
                            <option value="UP">UP</option>
                            <option value="HR">Haryana</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Zip</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="zip" 
                            id="zip" 
                            
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <div className="form-check">
                            <input className="form-check-input" name="check" type="checkbox" id="check" 
                               
                                />
                            <label className="form-check-label">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary"  type="submit">Add Record</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
  }}

export default Home;
