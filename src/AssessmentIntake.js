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

function AssessmentIntake() {

  class FormExampleCaptureValues extends Component {
    state = { sub_dip: '', sub_job: '', job_desc: '', sub_job_desc: '', emp_add: '', sub_emp_add: '', emp_phone: '', sub_emp_phone: '', 
              years_worked: '', mon_worked: '', sub_years_worked: '', sub_mon_worked: '', hour_wage: '', bi_wage: '', mon_wage: '', sub_hour_wage: '', sub_bi_wage: '', 
              sub_mon_wage: '', sub_tr: '', tr_pro: '', tr_loc: '', sub_tr_pro: '', sub_tr_loc: '', sub_sk: '', skills: '', sub_skills: '', first_name: '', sub_first_name: '', last_name: '', sub_late_name: '', ssn: '', sub_ssn: ''}
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { dip, job, job_desc, emp_add, emp_phone, years_worked, mon_worked, hour_wage, bi_wage, mon_wage, tr, tr_pro, tr_loc, sk, skills, first_name, last_name, ssn, red, orange, yellow, green, blue

} = this.state
  
      this.setState({ sub_dip: dip, sub_job: job, sub_job_desc: job_desc, 
                      sub_emp_add: emp_add, sub_emp_phone: emp_phone, sub_years_worked: years_worked, sub_mon_worked: mon_worked, sub_hour_wage: hour_wage, sub_bi_wage: bi_wage, sub_mon_wage: mon_wage, sub_tr: tr, sub_tr_pro: tr_pro, sub_tr_loc: tr_loc, sub_sk: sk, sub_skills: skills, 
                      sub_first_name: first_name, sub_last_name: last_name, sub_ssn: ssn, subred: red, suborange: orange, subyellow: yellow, subgreen: green, subblue: blue
})
    }
        
            render() {
            const { dip, sub_dip, job, sub_job,job_desc, sub_job_desc, emp_add, emp_phone, sub_emp_add, sub_emp_phone, mon_worked, sub_mon_worked, years_worked, sub_years_worked
            , hour_wage, sub_hour_wage, bi_wage, sub_bi_wage, mon_wage, sub_mon_wage, tr, sub_tr, tr_pro, tr_loc, sub_tr_pro, sub_tr_loc, sk, sub_sk, skills, sub_skills, first_name, last_name, ssn, sub_first_name, sub_last_name, sub_ssn, red, subred, orange, suborange, yellow, subyellow, green, subgreen, blue, subblue
        } = this.state
  
  const errorLabel = <label color="red" pointing/>
  
      return (
        <div class="form-cont">
            <h2>Assessment at Intake</h2>
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
              <Form.Group className="group-1">
                <label><b>1) Do you have a high school diploma or GED?</b></label>
                <Form.Radio
                  label='Yes'
                  name='dip'
                  value={true}
                  checked={this.state.dip == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='No'
                  name='dip'
                  value={false}
                  checked={this.state.dip == false}
                  onChange={this.handleChange}
                />
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

                <label><b>2) Do you have a job?</b></label>
                <Form.Radio
                  name='job'
                  label='Yes'
                  value={true}
                  checked={this.state.job == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='job'
                  label='No'
                  value={false}
                  checked={this.state.job == false}
                  onChange={this.handleChange}
                />
              <p></p>
              </Form.Group>
              <div class="ui grid">
    <div class="ui form ten wide column centered">
    <div class="one field">
              <label>If you do have a job:</label>
              <Form.Input
                placeholder='Job Description'
                name='job_desc'
                value={job_desc}
                onChange={this.handleChange}
              />
            <Form.Input
                placeholder='Employee Address'
                name='emp_add'
                value={emp_add}
                onChange={this.handleChange}
              />
            <Form.Input
                placeholder='Employee Phone #'
                name='emp_phone'
                value={emp_phone}
                onChange={this.handleChange}
              />
                            </div>
        </div>
      </div>
      <p>
      </p>
      <p>
      </p>
              <Form.Group className="group-1">

              <label>Number of years worked there</label>
            <Form.Input
                placeholder='# years worked there'
                name='years_worked'
                value={years_worked}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ errorLabel }
                
              />
              <label>Number of months worked there</label>
              <Form.Input
                placeholder='# months worked there'
                name='mon_worked'
                value={mon_worked}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ errorLabel }
              />
                            </Form.Group>
                            <Form.Group className="group-1">
              <label>Hourly wage</label>
            <Form.Input
                placeholder='Hourly wage'
                name='hour_wage'
                value={hour_wage}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ errorLabel }
              />


              <label>Bi-weekly wage</label>
            <Form.Input
                placeholder='Bi-weekly wage'
                name='bi_wage'
                value={bi_wage}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ errorLabel }
              />
              <label>Monthly wage</label>
              <Form.Input
                placeholder='Monthly wage'
                name='mon_wage'
                value={mon_wage}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ errorLabel }
              />
              </Form.Group>
              <Form.Group className="group-1">
              <label><b>3) If you don't have a job, are you enrolled in a training proram?</b></label>
                <Form.Radio
                  name='tr'
                  label='Yes'
                  value={true}
                  checked={this.state.tr == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='tr'
                  label='No'
                  value={false}
                  checked={this.state.tr == false}
                  onChange={this.handleChange}
                />
              <p></p>
              </Form.Group>
              <div class="ui grid">
    <div class="ui form ten wide column centered">
    <div class="one field">
              <label>If you are enrolled in job training:</label>
              <Form.Input
                placeholder='Training Program'
                name='tr_pro'
                value={tr_pro}
                onChange={this.handleChange}
              />
            <Form.Input
                placeholder='Location'
                name='tr_loc'
                value={tr_loc}
                onChange={this.handleChange}
              />
              </div>
        </div>
      </div>
           <p></p>
           <p></p>


           <Form.Group className="group-1">
              <label><b>4) Do you have any job skills?</b></label>
                <Form.Radio
                  name='sk'
                  label='Yes'
                  value={true}
                  checked={this.state.sk == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='sk'
                  label='No'
                  name='sk'
                  value={false}
                  checked={this.state.sk == false}
                  onChange={this.handleChange}
                />
              <p></p>
              </Form.Group>
              <div class="ui grid">
    <div class="ui form ten wide column centered">
    <div class="one field">
              <label>If so, what are your job skills?</label>
              <Form.Field
              control={TextArea}
              placeholder='Job skills'
              name='skills'
              value={skills}
              onChange={this.handleChange}
              />
                            </div>
        </div>
      </div>

      <p>

      </p>

<p>
  
</p>

<h3>Color Coding</h3>

<Form.Group className="group-1">
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

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

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

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

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
</Form.Group>
<Form.Group className="group-1">
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

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

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
</Form.Group>



              <Form.Button content='Submit' />
              </Form>
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

export default AssessmentIntake;
