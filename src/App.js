import { render } from "react-dom";
import './App.css';
import { useState, useEffect, Component } from "react";
import IndServicePlan from './IndServicePlan';
import CaseNotes from './CaseNotes.js'
import ReferralList from './ReferralList.js'
import AssessmentIntake from './AssessmentIntake.js';
import HousingPlan from './HousingPlan.js'
import Metrics from './Metrics.js';
import { Routes, Route, Link } from "react-router-dom";
import Display from './Display.js';
import SearchBarPage from "./SearchBarPage";
import logo from "./GNP_Logo_RGB.png";
import { Button } from "semantic-ui-react";

function App() {

  return (
    <div>
      <div class="header">
      <img src={logo} width="140"/>

      <a class="logo" href='/'><i class="home icon"></i></a>

    </div>
      <Routes>
        <Route path="/" element={< SearchBarPage/>} />
        <Route path="casenotes" element={< CaseNotes/>} />
        <Route path="referrallist" element={< ReferralList/>} />
        <Route path="assessmentintake" element={< AssessmentIntake/>} />
        <Route path="housingplan" element={< HousingPlan/>} />
        <Route path="indserviceplan" element={< IndServicePlan/>} />
        <Route path="display" element={<Display />} />
        <Route path="metrics" element={<Metrics />} />
      </Routes>
    </div>
  );
}

export default App;
