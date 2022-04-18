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

function CaseNotes() {

  class FormExampleCaptureValues extends Component {

    state = { name1: '', date1: '', case_notes: '', subname1: '', subdate1: '', sub_case_notes: ''}
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { name1, date1, case_notes} = this.state
  
      this.setState({ subname1: name1, subdate1: date1, sub_case_notes: case_notes})}
  
    render() {
      const { name1, subname1, date1, subdate1, case_notes, sub_case_notes} = this.state
  
  const errorLabel = <label color="red" pointing/>
  
      return (
        <div>
          <h1>Case Notes</h1>
          <Form onSubmit={this.handleSubmit}>
          <h3>Resident Name</h3>
          <Form.Field
              control={TextArea}
              placeholder='Name'
              name='name1'
              value={name1}
              onChange={this.handleChange}
              />
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
          <Form.Button content='Submit' />
          </Form>
          <p></p>
          <p></p>
          <strong>onChange:</strong>
          <pre>{JSON.stringify({ name1, date1, case_notes }, null, 2)}</pre>
          <strong>onSubmit:</strong>
          <pre>{JSON.stringify({ subname1, subdate1, sub_case_notes }, null, 2)}</pre>
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
