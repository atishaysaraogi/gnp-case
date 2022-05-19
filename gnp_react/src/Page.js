import gnp from './GNP_Logo_RGB.png';
import './App.css';
import React, {Component} from 'react';
import { render } from "react-dom";
import { Button, Search, Dropdown, Grid, Segment} from 'semantic-ui-react';


function Page() {
    return (
      <div className="App">
  
          <h1>  </h1> 
          
          <img src={gnp} className="gnp-logo" alt = "logo"/>
          </div>
  );
}  

export default Page;