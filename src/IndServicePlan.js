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

function IndServicePlan() {

  class FormExampleCaptureValues extends Component {

    state = { first_name: '', last_name: '', email: '', dob: '', intake_date: '', num_children: '', date_discharge: '', submittedFirstName: '', submittedLastName: '', submittedEmail: ''
              , submitteddob: '', submittedIntake: '', submittedNumChildren: '', submittedDischargeDate: '', sub_dip: '', sub_job: '', job_desc: '', sub_job_desc: '', emp_add: '', sub_emp_add: '', emp_phone: '', sub_emp_phone: '', 
              years_worked: '', mon_worked: '', sub_years_worked: '', sub_mon_worked: '', hour_wage: '', bi_wage: '', mon_wage: '', sub_hour_wage: '', sub_bi_wage: '', 
              sub_mon_wage: '', sub_tr: '', tr_pro: '', tr_loc: '', sub_tr_pro: '', sub_tr_loc: '', sub_sk: '', skills: '', sub_skills: '', 
              action_item_a1: '', sub_action_item_a1: '', proj_date_a1: '', sub_proj_date_a1: '', act_date_a1: '', sub_act_date_a1: '',
              action_item_b1: '', sub_action_item_b1: '', proj_date_b1: '', sub_proj_date_b1: '', act_date_b1: '', sub_act_date_b1: '',
              action_item_a2: '', sub_action_item_a2: '', proj_date_a2: '', sub_proj_date_a2: '', act_date_a2: '', sub_act_date_a2: '',
              action_item_b2: '', sub_action_item_b2: '', proj_date_b2: '', sub_proj_date_b2: '', act_date_b2: '', sub_act_date_b2: '',
              action_item_a3: '', sub_action_item_a3: '', proj_date_a3: '', sub_proj_date_a3: '', act_date_a3: '', sub_act_date_a3: '',
              action_item_b3: '', sub_action_item_b3: '', proj_date_b3: '', sub_proj_date_b3: '', act_date_b3: '', sub_act_date_b3: '',
              action_item_a4: '', sub_action_item_a4: '', proj_date_a4: '', sub_proj_date_a4: '', act_date_a4: '', sub_act_date_a4: '',
              action_item_b4: '', sub_action_item_b4: '', proj_date_b4: '', sub_proj_date_b4: '', act_date_b4: '', sub_act_date_b4: '',
              action_item_a5: '', sub_action_item_a5: '', proj_date_a5: '', sub_proj_date_a5: '', act_date_a5: '', sub_act_date_a5: '',
              action_item_b5: '', sub_action_item_b5: '', proj_date_b5: '', sub_proj_date_b5: '', act_date_b5: '', sub_act_date_b5: '', ssn: '', subssn: ''
  }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { first_name, last_name, email, dob, intake_date, num_children, date_discharge, dip, job, job_desc, emp_add, emp_phone, years_worked, mon_worked, hour_wage, bi_wage, mon_wage, tr, tr_pro, tr_loc, sk, skills,
              action_item_a1, proj_date_a1, act_date_a1, action_item_b1, proj_date_b1, act_date_b1,
              action_item_a2, proj_date_a2, act_date_a2, action_item_b2, proj_date_b2, act_date_b2,
              action_item_a3, proj_date_a3, act_date_a3, action_item_b3, proj_date_b3, act_date_b3,
              action_item_a4, proj_date_a4, act_date_a4, action_item_b4, proj_date_b4, act_date_b4,
              action_item_a5, proj_date_a5, act_date_a5, action_item_b5, proj_date_b5, act_date_b5, ssn

} = this.state
  
      this.setState({ submittedFirstName: first_name, submittedLastName: last_name, submittedEmail: email, submitteddob: dob, submittedIntake: intake_date, submittedNumChildren: num_children, submittedDischargeDate: date_discharge, sub_dip: dip, sub_job: job, sub_job_desc: job_desc, 
                      sub_emp_add: emp_add, sub_emp_phone: emp_phone, sub_years_worked: years_worked, sub_mon_worked: mon_worked, sub_hour_wage: hour_wage, sub_bi_wage: bi_wage, sub_mon_wage: mon_wage, sub_tr: tr, sub_tr_pro: tr_pro, sub_tr_loc: tr_loc, sub_sk: sk, sub_skills: skills, 
                      sub_action_item_a1: action_item_a1, sub_proj_date_a1: proj_date_a1, sub_act_date_a1: act_date_a1, 
                      sub_action_item_b1: action_item_b1, sub_proj_date_b1: proj_date_b1, sub_act_date_b1: act_date_b1,
                      sub_action_item_a2: action_item_a2, sub_proj_date_a2: proj_date_a2, sub_act_date_a2: act_date_a2,
                      sub_action_item_b2: action_item_b2, sub_proj_date_b2: proj_date_b2, sub_act_date_b2: act_date_b2,
                      sub_action_item_a3: action_item_a3, sub_proj_date_a3: proj_date_a3, sub_act_date_a3: act_date_a3,
                      sub_action_item_b3: action_item_b3, sub_proj_date_b3: proj_date_b3, sub_act_date_b3: act_date_b3,
                      sub_action_item_a4: action_item_a4, sub_proj_date_a4: proj_date_a4, sub_act_date_a4: act_date_a4,
                      sub_action_item_b4: action_item_b4, sub_proj_date_b4: proj_date_b4, sub_act_date_b4: act_date_b4,
                      sub_action_item_a5: action_item_a5, sub_proj_date_a5: proj_date_a5, sub_act_date_a5: act_date_a5,
                      sub_action_item_b5: action_item_b5, sub_proj_date_b5: proj_date_b5, sub_act_date_b5: act_date_b5, subssn: ssn})
    }
  
    render() {
      const { value, first_name, email, last_name, dob, intake_date, num_children, date_discharge, submittedFirstName, submittedLastName, submittedEmail, submitteddob, submittedIntake, submittedNumChildren, submittedDischargeDate, dip, sub_dip, job, sub_job,job_desc, sub_job_desc, emp_add, emp_phone, sub_emp_add, sub_emp_phone, mon_worked, sub_mon_worked, years_worked, sub_years_worked
      , hour_wage, sub_hour_wage, bi_wage, sub_bi_wage, mon_wage, sub_mon_wage, tr, sub_tr, tr_pro, tr_loc, sub_tr_pro, sub_tr_loc, sk, sub_sk, skills, sub_skills, 
      action_item_a1, sub_action_item_a1, proj_date_a1, sub_proj_date_a1, act_date_a1, sub_act_date_a1,
      action_item_b1, sub_action_item_b1, proj_date_b1, sub_proj_date_b1, act_date_b1, sub_act_date_b1,
      action_item_a2, sub_action_item_a2, proj_date_a2, sub_proj_date_a2, act_date_a2, sub_act_date_a2,
      action_item_b2, sub_action_item_b2, proj_date_b2, sub_proj_date_b2, act_date_b2, sub_act_date_b2,
      action_item_a3, sub_action_item_a3, proj_date_a3, sub_proj_date_a3, act_date_a3, sub_act_date_a3,
      action_item_b3, sub_action_item_b3, proj_date_b3, sub_proj_date_b3, act_date_b3, sub_act_date_b3,
      action_item_a4, sub_action_item_a4, proj_date_a4, sub_proj_date_a4, act_date_a4, sub_act_date_a4,
      action_item_b4, sub_action_item_b4, proj_date_b4, sub_proj_date_b4, act_date_b4, sub_act_date_b4,
      action_item_a5, sub_action_item_a5, proj_date_a5, sub_proj_date_a5, act_date_a5, sub_act_date_a5,
      action_item_b5, sub_action_item_b5, proj_date_b5, sub_proj_date_b5, act_date_b5, sub_act_date_b5, ssn, subssn  } = this.state
  
  const errorLabel = <label color="red" pointing/>
  
      return (
        <div class="form-cont">
          <h1>New Resident Intake Form</h1>
          <h2>Individual Service Plan</h2>
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
              <label>Date of Birth</label>
              <Form.Input
                placeholder='Date of Birth'
                name='dob'
                value={dob}
                type="date"
                onChange={this.handleChange}
              />
              </Form.Group>
              <Form.Group className="group-1">
              <label>Date of Intake</label>
              <Form.Input
                placeholder='Date of Intake'
                name='intake_date'
                value={intake_date}
                type="date"
                onChange={this.handleChange}
              />
              <label>Number of Children</label>
              <Form.Input
                placeholder='Number of Children'
                name='num_children'
                value={num_children}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ <label color="red" pointing/> }
              />
              <label>Date of Discharge</label>
               <Form.Input
                placeholder='Date of Discharge'
                name='date_discharge'
                value={date_discharge}
                type="date"
                onChange={this.handleChange}
              />
              </Form.Group>
          <h2>Statement of Identified Goals for Self-Sufficiency</h2>
          <h3>Training</h3>
          <label>Action Item A</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_a1'
              value={action_item_a1}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_a1'
              value={proj_date_a1}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a1'
              value={act_date_a1}
              onChange={this.handleChange}
              />
              <label>Action Item B</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_b1'
              value={action_item_b1}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_b1'
              value={proj_date_b1}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b1'
              value={act_date_b1}
              onChange={this.handleChange}
              />


          <h3>Childcare</h3>
           
          <label>Action Item A</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_a2'
              value={action_item_a2}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_a2'
              value={proj_date_a2}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a2'
              value={act_date_a2}
              onChange={this.handleChange}
              />
              <label>Action Item B</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_b2'
              value={action_item_b2}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_b2'
              value={proj_date_b2}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b2'
              value={act_date_b2}
              onChange={this.handleChange}
              />

          <h3>Employment</h3>
           
          <label>Action Item A</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_a3'
              value={action_item_a3}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_a3'
              value={proj_date_a3}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a3'
              value={act_date_a3}
              onChange={this.handleChange}
              />
              <label>Action Item B</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_b3'
              value={action_item_b3}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_b3'
              value={proj_date_b3}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b3'
              value={act_date_b3}
              onChange={this.handleChange}
              />

          <h3>Housing</h3>
           
          <label>Action Item A</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_a4'
              value={action_item_a4}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_a4'
              value={proj_date_a4}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a4'
              value={act_date_a4}
              onChange={this.handleChange}
              />
              <label>Action Item B</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_b4'
              value={action_item_b4}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_b4'
              value={proj_date_b4}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b4'
              value={act_date_b4}
              onChange={this.handleChange}
              />

          <h3>Other</h3>
          
          <label>Action Item A</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_a5'
              value={action_item_a5}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_a5'
              value={proj_date_a5}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a5'
              value={act_date_a5}
              onChange={this.handleChange}
              />
              <label>Action Item B</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_b5'
              value={action_item_b5}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_b5'
              value={proj_date_b5}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b5'
              value={act_date_b5}
              onChange={this.handleChange}
              />
              </Form>

          <p></p>
          <p></p>
          <strong>onChange:</strong>
          <pre>{JSON.stringify({ first_name, last_name, dob, intake_date, num_children, date_discharge, dip, job, job_desc, emp_add, emp_phone, years_worked, mon_worked, hour_wage, bi_wage, mon_wage, tr, tr_pro, tr_loc, sk, skills,
            action_item_a1, proj_date_a1, act_date_a1, action_item_b1, proj_date_b1, act_date_b1, 
            action_item_a2, proj_date_a2, act_date_a2, action_item_b2, proj_date_b2, act_date_b2, 
            action_item_a3, proj_date_a3, act_date_a3, action_item_b3, proj_date_b3, act_date_b3, 
            action_item_a4, proj_date_a4, act_date_a4, action_item_b4, proj_date_b4, act_date_b4,
            action_item_a5, proj_date_a5, act_date_a5, action_item_b5, proj_date_b5, act_date_b5, ssn
 }, null, 2)}</pre>
          <strong>onSubmit:</strong>
          <pre>{JSON.stringify({ submittedFirstName, submittedLastName, submitteddob, submittedIntake, submittedNumChildren, submittedDischargeDate, sub_dip, sub_job, sub_job_desc, sub_emp_add, sub_emp_phone, sub_years_worked, sub_mon_worked, sub_hour_wage, sub_bi_wage, sub_mon_wage, 
                                  sub_tr, sub_tr_pro, sub_tr_loc, sub_sk, sub_skills, 
                                  sub_action_item_a1, sub_proj_date_a1, sub_act_date_a1, sub_action_item_b1, sub_proj_date_b1, sub_act_date_b1,
                                  sub_action_item_a2, sub_proj_date_a2, sub_act_date_a2, sub_action_item_b2, sub_proj_date_b2, sub_act_date_b2,
                                  sub_action_item_a3, sub_proj_date_a3, sub_act_date_a3, sub_action_item_b3, sub_proj_date_b3, sub_act_date_b3,
                                  sub_action_item_a4, sub_proj_date_a4, sub_act_date_a4, sub_action_item_b4, sub_proj_date_b4, sub_act_date_b4,
                                  sub_action_item_a5, sub_proj_date_a5, sub_act_date_a5, sub_action_item_b5, sub_proj_date_b5, sub_act_date_b5, subssn
 }, null, 2)}</pre>
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

export default IndServicePlan;
