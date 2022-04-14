import logo from './logo.svg';
import './App.css';
import { useState, useEffect, Component } from "react";
import Intake from './Intake.js';
import Metrics from './Metrics.js';
import SearchBarPage from './SearchBarPage.js';
import Page from './Page.js';


function App() {

  return (
    <div>
      <SearchBarPage />
      {/* <Page /> */}
    </div>
    
  );
}

export default App;
