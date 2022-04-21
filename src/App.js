import logo from './logo.svg';
import './App.css';
import { useState, useEffect, Component } from "react";
import IndServicePlan from './IndServicePlan';
import CaseNotes from './CaseNotes.js'
import ReferralList from './ReferralList.js'
import AssessmentIntake from './AssessmentIntake.js';
import HousingPlan from './HousingPlan.js'

function App() {

  return (
    <IndServicePlan />
  );
}

export default App;
