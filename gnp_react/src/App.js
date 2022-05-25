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

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={< CaseNotes />} />
        <Route path="display" element={<Display />} />
        <Route path="metrics" element={<Metrics />} />
      </Routes>
    </div>
  );
}

export default App;
