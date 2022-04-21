import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';
import './Intake.css';
import { useState, useEffect, Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from 'formsy-semantic-ui-react'

function HousingPlan() {

  class FormExampleCaptureValues extends Component {

    state = {  act_30: '', act_60: '', act_90: '', act_120: '', sub_act_30: '', sub_act_60: '', sub_act_90: '', sub_act_120: '', first_name: '', sub_first_name: '', last_name: '', sub_late_name: '', ssn: '', sub_ssn: ''}

  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { act_30, act_60, act_90, act_120, first_name, last_name, ssn } = this.state
  
      this.setState({   sub_act_30: act_30, sub_act_60: act_60, sub_act_90: act_90, sub_act_120: act_120, sub_first_name: first_name, sub_last_name: last_name, sub_ssn: ssn
      })}
  
    render() {
      const {       act_30, sub_act_30, act_60, sub_act_60, act_90, sub_act_90, act_120, sub_act_120, first_name, last_name, ssn, sub_first_name, sub_last_name, sub_ssn
      } = this.state
  
  const errorLabel = <label color="red" pointing/>
  
      return (
        <div class="form-cont">
        <Form onSubmit={this.handleSubmit}>
        <h2>Housing Plan</h2>
        <Form.Group className="group-1">
          <label>First Name</label>
              <Form.Input
                placeholder='First Name'
                name='first_name'
                value={first_name}
                onChange={this.handleChange}
              />
              <label>Last Name</label>
              <Form.Input
                placeholder='Last Name'
                name='last_name'
                value={last_name}
                onChange={this.handleChange}
              />
              <label>Last 4 Digits of SSN</label>
              <Form.Input
                placeholder='Last 4 of SSN'
                name='ssn'
                value={ssn}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ <label color="red" pointing/> }
              />
              </Form.Group>
          <h3>Phase 1: 30-Day Progress</h3>
          <Form.Field
              control={TextArea}
              placeholder='Action Items'
              name='act_30'
              value={act_30}
              onChange={this.handleChange}
              />
          <h3>Phase 1: 60-Day Progress</h3>
          <Form.Field
              control={TextArea}
              placeholder='Action Items'
              name='act_60'
              value={act_60}
              onChange={this.handleChange}
              />
          <h3>Phase 1: 90-Day Progress</h3>
          <Form.Field
              control={TextArea}
              placeholder='Action Items'
              name='act_90'
              value={act_90}
              onChange={this.handleChange}
              />
          <h3>Phase 1: 120-Day Progress</h3>
          <Form.Field
              control={TextArea}
              placeholder='Action Items'
              name='act_120'
              value={act_120}
              onChange={this.handleChange}
              />
          <p></p>
          <Form.Button content='Submit' />
          </Form>
          <strong>onChange:</strong>
          <pre>{JSON.stringify({ act_30, act_60, act_90, act_120, first_name, last_name, ssn }, null, 2)}</pre>
          <strong>onSubmit:</strong>
          <pre>{JSON.stringify({ sub_act_30, sub_act_60, sub_act_90, sub_act_120, sub_first_name, sub_last_name, sub_ssn }, null, 2)}</pre>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <FormExampleCaptureValues/>
    </div>
  );
}

export default HousingPlan;
