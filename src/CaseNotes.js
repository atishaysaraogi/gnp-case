import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';
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

function CaseNotes() {

  class FormExampleCaptureValues extends Component {

    state = { date1: '', case_notes: '', subname1: '', subdate1: '', sub_case_notes: '', first_name: '', sub_first_name: '', last_name: '', sub_late_name: '', ssn: '', sub_ssn: ''}
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { date1, case_notes, first_name, last_name, ssn, red, orange, yellow, green, blue } = this.state
  
      this.setState({ subdate1: date1, sub_case_notes: case_notes, sub_first_name: first_name, sub_last_name: last_name, sub_ssn: ssn, subred: red, suborange: orange, subyellow: yellow, subgreen: green, subblue: blue})}
  
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

              <div class="ui grid">
    <div class="ui form ten wide column centered">
    <div class="one field">
              <Form.Input
                placeholder='Date'
                name='date1'
                value={date1}
                type="date"
                onChange={this.handleChange}
              />


</div>
        </div>
      </div>

              <h3>Case Notes</h3>

              <div class="ui grid">
    <div class="ui form ten wide column centered">
    <div class="one field">

            <Form.Field
              control={TextArea}
              placeholder='Case Notes'
              name='case_notes'
              value={case_notes}
              onChange={this.handleChange}
              width="200"
              />

</div>
        </div>
      </div>


<p></p>
<p></p>


          <Form.Button content='Submit' />
          </Form>
          <p></p>
          <p></p>
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
