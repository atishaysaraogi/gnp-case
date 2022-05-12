import { render } from "react-dom";
import './App.css';
import { useState, useEffect, Component } from "react";
import IndServicePlan from './IndServicePlan';
import CaseNotes from './CaseNotes.js'
import ReferralList from './ReferralList.js'
import AssessmentIntake from './AssessmentIntake.js';
import HousingPlan from './HousingPlan.js'
//import Intake from './Intake.js';
import Metrics from './Metrics.js';
import { Routes, Route, Link } from "react-router-dom";
import Display from './Display.js';
import SearchBarPage from "./SearchBarPage";
import logo from "./GNP_Logo_RGB.png";

function App() {

  return (
    <div>
      <div class="header">
      <img src={logo} width="190"/>
      <h2>Good News Partners Case Management Database</h2>
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
