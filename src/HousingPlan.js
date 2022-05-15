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

    state = {  act_30: '', act_60: '', act_90: '', act_120: '', sub_act_30: '', sub_act_60: '', sub_act_90: '', sub_act_120: '', first_name: '', sub_first_name: '', last_name: '', sub_last_name: '', ssn: '', sub_ssn: ''}

  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { act_30, act_60, act_90, act_120, first_name, last_name, ssn, red, orange, yellow, green, blue } = this.state
  
      this.setState({   sub_act_30: act_30, sub_act_60: act_60, sub_act_90: act_90, sub_act_120: act_120, sub_first_name: first_name, sub_last_name: last_name, sub_ssn: ssn, subred: red, suborange: orange, subyellow: yellow, subgreen: green, subblue: blue
      })}
  
    render() {
      const {       act_30, sub_act_30, act_60, sub_act_60, act_90, sub_act_90, act_120, sub_act_120, first_name, last_name, ssn, sub_first_name, sub_last_name, sub_ssn, red, subred, orange, suborange, yellow, subyellow, green, subgreen, blue, subblue
      } = this.state
  
  const errorLabel = <label color="red" pointing/>
  
      return (
        <div class="form-cont">
        <Form onSubmit={this.handleSubmit}>
        <h2>Housing Plan</h2>
        <div class="ui grid">
    <div class="ui form ten wide column centered">
    <div class="one field">
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
              </div>
        </div>
      </div>
      <p>
      </p>

      <p>
      </p>


          <label><b>Red?</b></label>
                <Form.Radio
                  name='red'
                  label='Yes'
                  value={true}
                  checked={this.state.red == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='red'
                  label='No'
                  value={false}
                  checked={this.state.red == false}
                  onChange={this.handleChange}
                  />

<label><b>Orange?</b></label>
                <Form.Radio
                  name='orange'
                  label='Yes'
                  value={true}
                  checked={this.state.orange == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='orange'
                  label='No'
                  value={false}
                  checked={this.state.orange == false}
                  onChange={this.handleChange}
                  />

<label><b>Yellow?</b></label>
                <Form.Radio
                  name='yellow'
                  label='Yes'
                  value={true}
                  checked={this.state.yellow == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='yellow'
                  label='No'
                  value={false}
                  checked={this.state.yellow == false}
                  onChange={this.handleChange}
                  />

<label><b>Green?</b></label>
                <Form.Radio
                  name='green'
                  label='Yes'
                  value={true}
                  checked={this.state.green == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='green'
                  label='No'
                  value={false}
                  checked={this.state.green == false}
                  onChange={this.handleChange}
                  />

<label><b>Blue?</b></label>
                <Form.Radio
                  name='blue'
                  label='Yes'
                  value={true}
                  checked={this.state.blue == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='blue'
                  label='No'
                  value={false}
                  checked={this.state.blue == false}
                  onChange={this.handleChange}
                  />



          <Form.Button content='Submit' />
          </Form>
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
