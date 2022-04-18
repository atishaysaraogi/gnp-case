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

function ReferralList() {

  class FormExampleCaptureValues extends Component {

    state = { name0: '', date0: '', entry: '', discharge: '', subname1: '', subdate1: '', subentry: '', subdischarge: '',
             date1: '', subdate1: '', date2: '', subdate2: '', date3: '', subdate3: '', date4: '', subdate4: '', date5: '', subdate5: '',
             date6: '', subdate6: '', date7: '', subdate7: '', date8: '', subdate8: '', date9: '', subdate9: '', date10: '', subdate10: '', 
            ref1: '', subref1: '', ref2: '', subref2: '', ref3: '', subref3: '', ref4: '', subref4: '', ref5: '', subref5: '', 
            ref6: '', subref6: '', ref7: '', subref7: '', ref8: '', subref8: '', ref9: '', subref9: '', ref10: '', subref10: ''}
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { name0, date0, entry, discharge, date1, date2, date3, date4, date5, date6, date7, date8, date9, date10, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10 } = this.state
  
      this.setState({ subname0: name0, subdate0: date0, subentry: entry, subdischarge: discharge, subdate1: date1, subdate2: date2, subdate3: date3,
                        subdate4: date4, subdate5: date5, subdate6: date6, subdate7: date7, subdate8: date8, subdate9: date9, subdate10: date10,
                        subref1: ref1, subref2: ref2, subref3: ref3, subref4: ref4, subref5: ref5, subref6: ref6, subref7: ref7, subref8: ref8,
                        subref9: ref9, subref10: ref10 })}
  
    render() {
      const { name0, subname0, date0, subdate0, entry, subentry, discharge, subdischarge, date1, subdate1, date2, subdate2, 
            date3, subdate3, date4, subdate4, date5, subdate5, date6, subdate6, date7, subdate7, date8, subdate8, date9, subdate9, date10, subdate10,
            ref1, subref1, ref2, subref2, ref3, subref3, ref4, subref4, ref5, subref5, ref6, subref6, ref7, subref7, ref8, subref8, ref9, subref9, ref10, subref10 } = this.state
  
  const errorLabel = <label color="red" pointing/>
  
      return (
        <div>
          <h1>Referral List</h1>
          <Form onSubmit={this.handleSubmit}>
          <h3>Resident Name</h3>
          <Form.Field
              control={TextArea}
              placeholder='Name'
              name='name0'
              value={name0}
              onChange={this.handleChange}
              />
              <h3>Today's Date</h3>
              <Form.Input
                placeholder='Date'
                name='date0'
                value={date0}
                type="date"
                onChange={this.handleChange}
              />
              <h3>Date of Entry</h3>
              <Form.Input
                placeholder='Date'
                name='entry'
                value={entry}
                type="date"
                onChange={this.handleChange}
              />
            <h3>Date of Discharge</h3>
              <Form.Input
                placeholder='Date'
                name='discharge'
                value={discharge}
                type="date"
                onChange={this.handleChange}
              />


            <Form.Group className="group-1">
              <label>Date 1</label>
              <Form.Input
                placeholder='Date 1'
                name='date1'
                value={date1}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 1</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 1'
              name='ref1'
              value={ref1}
              onChange={this.handleChange}
              />
              </Form.Group>



              <Form.Group className="group-1">
              <label>Date 2</label>
              <Form.Input
                placeholder='Date 2'
                name='date2'
                value={date2}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 2</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 2'
              name='ref2'
              value={ref2}
              onChange={this.handleChange}
              />
              </Form.Group>



              <Form.Group className="group-1">
              <label>Date 3</label>
              <Form.Input
                placeholder='Date 3'
                name='date3'
                value={date3}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 3</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 3'
              name='ref3'
              value={ref3}
              onChange={this.handleChange}
              />
              </Form.Group>



              <Form.Group className="group-1">
              <label>Date 4</label>
              <Form.Input
                placeholder='Date 4'
                name='date4'
                value={date4}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 4</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 4'
              name='ref4'
              value={ref4}
              onChange={this.handleChange}
              />
              </Form.Group>



              <Form.Group className="group-1">
              <label>Date 5</label>
              <Form.Input
                placeholder='Date 5'
                name='date5'
                value={date5}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 5</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 5'
              name='ref5'
              value={ref5}
              onChange={this.handleChange}
              />
              </Form.Group>




              <Form.Group className="group-1">
              <label>Date 6</label>
              <Form.Input
                placeholder='Date 6'
                name='date6'
                value={date6}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 1</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 6'
              name='ref6'
              value={ref6}
              onChange={this.handleChange}
              />
              </Form.Group>



              <Form.Group className="group-1">
              <label>Date 7</label>
              <Form.Input
                placeholder='Date 7'
                name='date7'
                value={date7}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 7</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 7'
              name='ref7'
              value={ref7}
              onChange={this.handleChange}
              />
              </Form.Group>


              <Form.Group className="group-1">
              <label>Date 8</label>
              <Form.Input
                placeholder='Date 8'
                name='date8'
                value={date8}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 8</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 8'
              name='ref8'
              value={ref8}
              onChange={this.handleChange}
              />
              </Form.Group>


              <Form.Group className="group-1">
              <label>Date 9</label>
              <Form.Input
                placeholder='Date 9'
                name='date9'
                value={date9}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 9</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 9'
              name='ref9'
              value={ref9}
              onChange={this.handleChange}
              />
              </Form.Group>


              <Form.Group className="group-1">
              <label>Date 10</label>
              <Form.Input
                placeholder='Date 10'
                name='date10'
                value={date10}
                type="date"
                onChange={this.handleChange}
              />
              <label>Referral 10</label>
              <Form.Field
              control={TextArea}
              placeholder='Referral 10'
              name='ref10'
              value={ref10}
              onChange={this.handleChange}
              />
              </Form.Group>

          <Form.Button content='Submit' />
          </Form>
          <p></p>
          <p></p>
          <strong>onChange:</strong>
          <pre>{JSON.stringify({ name0, date0, entry, discharge, date1, date2, date3, date4, date5, date6, date7, date8, date9, date10, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10 }, null, 2)}</pre>
          <strong>onSubmit:</strong>
          <pre>{JSON.stringify({ subname0, subdate0, subentry, subdischarge, subdate1, subdate2, subdate3, subdate4, subdate5, subdate6, subdate7, subdate8, subdate9, subdate10, subref1, subref2, subref3, subref4, subref5, subref6, subref7, subref8, subref9, subref10 }, null, 2)}</pre>
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

export default ReferralList;
