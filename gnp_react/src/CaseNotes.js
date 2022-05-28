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
import addCaseNote from './services/casenotedb'

function CaseNotes() {

  class FormExampleCaptureValues extends Component {

    handleaddcasenote = newcasenote => {
      addCaseNote({
          activity: newcasenote
      })
    }
    
    state = { date1: '', case_notes: '', subname1: '', subdate1: '', sub_case_notes: '', first_name: '', sub_first_name: '', last_name: '', sub_late_name: '', ssn: '', sub_ssn: ''}
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { date1, case_notes, first_name, last_name, ssn, red, orange, yellow, green, blue } = this.state
      this.setState({ subdate1: date1, sub_case_notes: case_notes, sub_first_name: first_name, sub_last_name: last_name, sub_ssn: ssn, subred: red, suborange: orange, subyellow: yellow, subgreen: green, subblue: blue})
      this.handleaddcasenote(this.state)
    }
  
    render() {
      const { date1, subdate1, case_notes, sub_case_notes, first_name, last_name, ssn, sub_first_name, sub_last_name, sub_ssn, red, subred, orange, suborange, yellow, subyellow, green, subgreen, blue, subblue} = this.state
  
  const errorLabel = <label color="red" pointing/>
  
      return (
        <div class="form-cont">
          <h1>Case Notes</h1>
          <Form onSubmit={this.handleSubmit}>
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
              <h3>Today's Date</h3>
              <Form.Input
                placeholder='Date'
                name='date1'
                value={date1}
                type="date"
                onChange={this.handleChange}
              />
              <h3>Case Notes</h3>
            <Form.Field
              control={TextArea}
              placeholder='Case Notes'
              name='case_notes'
              value={case_notes}
              onChange={this.handleChange}
              />



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



          <Form.Button content='Submit'/>
          </Form>
          <p></p>
          <p></p>
          <strong>onChange:</strong>
          <pre>{JSON.stringify({ date1, case_notes, first_name, last_name, ssn, red, orange, yellow, green, blue }, null, 2)}</pre>
          <strong>onSubmit:</strong>
          <pre>{JSON.stringify({ subdate1, sub_case_notes, sub_first_name, sub_last_name, sub_ssn, subred, suborange, subyellow, subgreen, subblue }, null, 2)}</pre>
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

export default CaseNotes;
