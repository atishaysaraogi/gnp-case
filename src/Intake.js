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


function Intake() {
  
  class FormExampleCaptureValues extends Component {

    state = { first_name: '', last_name: '', email: '', dob: '', intake_date: '', num_children: '', date_discharge: '', submittedFirstName: '', submittedLastName: '', submittedEmail: ''
              , submitteddob: '', submittedIntake: '', submittedNumChildren: '', submittedDischargeDate: '', dip: '', sub_dip: '',
              job: '', sub_job: '', job_desc: '', sub_job_desc: '', emp_add: '', sub_emp_add: '', emp_phone: '', sub_emp_phone: '', 
              years_worked: '', mon_worked: '', sub_years_worked: '', sub_mon_worked: '', hour_wage: '', bi_wage: '', mon_wage: '', sub_hour_wage: '', sub_bi_wage: '', 
              sub_mon_wage: '', tr: '', sub_tr: '', tr_pro: '', tr_loc: '', sub_tr_pro: '', sub_tr_loc: '', sk: '', sub_sk: '', skills: '', sub_skills: '', 
              action_item_a1: '', sub_action_item_a1: '', proj_date_a1: '', sub_proj_date_a1: '', act_date_a1: '', sub_act_date_a1: '',
              action_item_b1: '', sub_action_item_b1: '', proj_date_b1: '', sub_proj_date_b1: '', act_date_b1: '', sub_act_date_b1: '',
              action_item_c1: '', sub_action_item_c1: '', proj_date_a1: '', sub_proj_date_c1: '', act_date_c1: '', sub_act_date_c1: '', 
              action_item_a2: '', sub_action_item_a2: '', proj_date_a2: '', sub_proj_date_a2: '', act_date_a2: '', sub_act_date_a2: '',
              action_item_b2: '', sub_action_item_b2: '', proj_date_b2: '', sub_proj_date_b2: '', act_date_b2: '', sub_act_date_b2: '',
              action_item_c2: '', sub_action_item_c2: '', proj_date_a2: '', sub_proj_date_c2: '', act_date_c2: '', sub_act_date_c2: '',
              action_item_a3: '', sub_action_item_a3: '', proj_date_a3: '', sub_proj_date_a3: '', act_date_a3: '', sub_act_date_a3: '',
              action_item_b3: '', sub_action_item_b3: '', proj_date_b3: '', sub_proj_date_b3: '', act_date_b3: '', sub_act_date_b3: '',
              action_item_c3: '', sub_action_item_c3: '', proj_date_a3: '', sub_proj_date_c3: '', act_date_c3: '', sub_act_date_c3: '',
              action_item_a4: '', sub_action_item_a4: '', proj_date_a4: '', sub_proj_date_a4: '', act_date_a4: '', sub_act_date_a4: '',
              action_item_b4: '', sub_action_item_b4: '', proj_date_b4: '', sub_proj_date_b4: '', act_date_b4: '', sub_act_date_b4: '',
              action_item_c4: '', sub_action_item_c4: '', proj_date_a4: '', sub_proj_date_c4: '', act_date_c4: '', sub_act_date_c4: '',
              action_item_a5: '', sub_action_item_a5: '', proj_date_a5: '', sub_proj_date_a5: '', act_date_a5: '', sub_act_date_a5: '',
              action_item_b5: '', sub_action_item_b5: '', proj_date_b5: '', sub_proj_date_b5: '', act_date_b5: '', sub_act_date_b5: '',
              action_item_c5: '', sub_action_item_c5: '', proj_date_a5: '', sub_proj_date_c5: '', act_date_c5: '', sub_act_date_c5: '',
              act_30: '', act_60: '', act_90: '', act_120: '', sub_act_30: '', sub_act_60: '', sub_act_90: '', sub_act_120: ''}
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { first_name, last_name, email, dob, intake_date, num_children, date_discharge, dip, job, job_desc, emp_add, emp_phone, years_worked, mon_worked, hour_wage, bi_wage, mon_wage, tr, tr_pro, tr_loc, sk, skills,
              action_item_a1, proj_date_a1, act_date_a1, action_item_b1, proj_date_b1, act_date_b1, action_item_c1, proj_date_c1, act_date_c1,
              action_item_a2, proj_date_a2, act_date_a2, action_item_b2, proj_date_b2, act_date_b2, action_item_c2, proj_date_c2, act_date_c2,
              action_item_a3, proj_date_a3, act_date_a3, action_item_b3, proj_date_b3, act_date_b3, action_item_c3, proj_date_c3, act_date_c3,
              action_item_a4, proj_date_a4, act_date_a4, action_item_b4, proj_date_b4, act_date_b4, action_item_c4, proj_date_c4, act_date_c4,
              action_item_a5, proj_date_a5, act_date_a5, action_item_b5, proj_date_b5, act_date_b5, action_item_c5, proj_date_c5, act_date_c5,
              act_30, act_60, act_90, act_120

} = this.state
  
      this.setState({ submittedFirstName: first_name, submittedLastName: last_name, submittedEmail: email, submitteddob: dob, submittedIntake: intake_date, submittedNumChildren: num_children, submittedDischargeDate: date_discharge, sub_dip: dip, sub_job: job, sub_job_desc: job_desc, 
                      sub_emp_add: emp_add, sub_emp_phone: emp_phone, sub_years_worked: years_worked, sub_mon_worked: mon_worked, sub_hour_wage: hour_wage, sub_bi_wage: bi_wage, sub_mon_wage: mon_wage, sub_tr: tr, sub_tr_pro: tr_pro, sub_tr_loc: tr_loc, sub_sk: sk, sub_skills: skills, 
                      sub_action_item_a1: action_item_a1, sub_proj_date_a1: proj_date_a1, sub_act_date_a1: act_date_a1, 
                      sub_action_item_b1: action_item_b1, sub_proj_date_b1: proj_date_b1, sub_act_date_b1: act_date_b1,
                      sub_action_item_c1: action_item_c1, sub_proj_date_c1: proj_date_c1, sub_act_date_c1: act_date_c1,
                      sub_action_item_a2: action_item_a2, sub_proj_date_a2: proj_date_a2, sub_act_date_a2: act_date_a2,
                      sub_action_item_b2: action_item_b2, sub_proj_date_b2: proj_date_b2, sub_act_date_b2: act_date_b2,
                      sub_action_item_c2: action_item_c2, sub_proj_date_c2: proj_date_c2, sub_act_date_c2: act_date_c2,
                      sub_action_item_a3: action_item_a3, sub_proj_date_a3: proj_date_a3, sub_act_date_a3: act_date_a3,
                      sub_action_item_b3: action_item_b3, sub_proj_date_b3: proj_date_b3, sub_act_date_b3: act_date_b3,
                      sub_action_item_c3: action_item_c3, sub_proj_date_c3: proj_date_c3, sub_act_date_c3: act_date_c3,
                      sub_action_item_a4: action_item_a4, sub_proj_date_a4: proj_date_a4, sub_act_date_a4: act_date_a4,
                      sub_action_item_b4: action_item_b4, sub_proj_date_b4: proj_date_b4, sub_act_date_b4: act_date_b4,
                      sub_action_item_c4: action_item_c4, sub_proj_date_c4: proj_date_c4, sub_act_date_c4: act_date_c4,
                      sub_action_item_a5: action_item_a5, sub_proj_date_a5: proj_date_a5, sub_act_date_a5: act_date_a5,
                      sub_action_item_b5: action_item_b5, sub_proj_date_b5: proj_date_b5, sub_act_date_b5: act_date_b5,
                      sub_action_item_c5: action_item_c5, sub_proj_date_c5: proj_date_c5, sub_act_date_c5: act_date_c5,
                      sub_act_30: act_30, sub_act_60: act_60, sub_act_90: act_90, sub_act_120: act_120
})
    }
  
    render() {
      const { value, first_name, email, last_name, dob, intake_date, num_children, date_discharge, submittedFirstName, submittedLastName, submittedEmail, submitteddob, submittedIntake, submittedNumChildren, submittedDischargeDate, dip, sub_dip, job, sub_job,job_desc, sub_job_desc, emp_add, emp_phone, sub_emp_add, sub_emp_phone, mon_worked, sub_mon_worked, years_worked, sub_years_worked
      , hour_wage, sub_hour_wage, bi_wage, sub_bi_wage, mon_wage, sub_mon_wage, tr, sub_tr, tr_pro, tr_loc, sub_tr_pro, sub_tr_loc, sk, sub_sk, skills, sub_skills, 
      action_item_a1, sub_action_item_a1, proj_date_a1, sub_proj_date_a1, act_date_a1, sub_act_date_a1,
      action_item_b1, sub_action_item_b1, proj_date_b1, sub_proj_date_b1, act_date_b1, sub_act_date_b1,
      action_item_c1, sub_action_item_c1, proj_date_c1, sub_proj_date_c1, act_date_c1, sub_act_date_c1,
      action_item_a2, sub_action_item_a2, proj_date_a2, sub_proj_date_a2, act_date_a2, sub_act_date_a2,
      action_item_b2, sub_action_item_b2, proj_date_b2, sub_proj_date_b2, act_date_b2, sub_act_date_b2,
      action_item_c2, sub_action_item_c2, proj_date_c2, sub_proj_date_c2, act_date_c2, sub_act_date_c2,
      action_item_a3, sub_action_item_a3, proj_date_a3, sub_proj_date_a3, act_date_a3, sub_act_date_a3,
      action_item_b3, sub_action_item_b3, proj_date_b3, sub_proj_date_b3, act_date_b3, sub_act_date_b3,
      action_item_c3, sub_action_item_c3, proj_date_c3, sub_proj_date_c3, act_date_c3, sub_act_date_c3,
      action_item_a4, sub_action_item_a4, proj_date_a4, sub_proj_date_a4, act_date_a4, sub_act_date_a4,
      action_item_b4, sub_action_item_b4, proj_date_b4, sub_proj_date_b4, act_date_b4, sub_act_date_b4,
      action_item_c4, sub_action_item_c4, proj_date_c4, sub_proj_date_c4, act_date_c4, sub_act_date_c4,
      action_item_a5, sub_action_item_a5, proj_date_a5, sub_proj_date_a5, act_date_a5, sub_act_date_a5,
      action_item_b5, sub_action_item_b5, proj_date_b5, sub_proj_date_b5, act_date_b5, sub_act_date_b5,
      action_item_c5, sub_action_item_c5, proj_date_c5, sub_proj_date_c5, act_date_c5, sub_act_date_c5,
      act_30, sub_act_30, act_60, sub_act_60, act_90, sub_act_90, act_120, sub_act_120
  } = this.state
  
  const errorLabel = <label color="red" pointing/>
  
      return (
        <div>
          <h1>New Resident Intake Form</h1>
          <h2>Individual Service Plan</h2>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group>
              <Form.Input
                placeholder='First Name'
                name='first_name'
                value={first_name}
                onChange={this.handleChange}
              />
              <Form.Input
                placeholder='Last Name'
                name='last_name'
                value={last_name}
                onChange={this.handleChange}
              />
              <label>Date of Birth</label>
              <Form.Input
                placeholder='Date of Birth'
                name='dob'
                value={dob}
                type="date"
                onChange={this.handleChange}
              />
              <label>Date of Intake</label>
              <Form.Input
                placeholder='Date of Intake'
                name='intake_date'
                value={intake_date}
                type="date"
                onChange={this.handleChange}
              />
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
              <h2>Assessment at Intake</h2>
                <label><b>1) Do you have a high school diploma or GED?</b></label>
                <Form.Radio
                  label='Yes'
                  name='dip'
                  value='dip_yes'
                  checked={this.state.dip == 'dip_yes'}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='No'
                  name='dip'
                  value='dip_no'
                  checked={this.state.dip == 'dip_no'}
                  onChange={this.handleChange}
                />
              <p></p>
                <label><b>2) Do you have a job?</b></label>
                <Form.Radio
                  label='Yes'
                  name='job'
                  value='job_yes'
                  checked={this.state.job == 'job_yes'}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='No'
                  name='job'
                  value='job_no'
                  checked={this.state.job == 'job_no'}
                  onChange={this.handleChange}
                />
              <p></p>
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
              <Form.Group>
            <Form.Input
                placeholder='# years worked there'
                name='years_worked'
                value={years_worked}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                
              />
              <Form.Input
                placeholder='# months worked there'
                name='mon_worked'
                value={mon_worked}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ errorLabel }
              />
            <Form.Input
                placeholder='Hourly wage'
                name='hour_wage'
                value={hour_wage}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ errorLabel }
              />
            <Form.Input
                placeholder='Bi-weekly wage'
                name='bi_wage'
                value={bi_wage}
                onChange={this.handleChange}
                validations="isNumeric"
                validationErrors={{ isNumeric: 'Must be a number' }}
                errorLabel={ errorLabel }
              />
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

              <label><b>3) If you don't have a job, are you enrolled in a training proram?</b></label>
                <Form.Radio
                  label='Yes'
                  name='tr'
                  value='tr_yes'
                  checked={this.state.tr == 'tr_yes'}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='No'
                  name='tr'
                  value='tr_no'
                  checked={this.state.tr == 'tr_no'}
                  onChange={this.handleChange}
                />
              <p></p>
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
           <p></p>
              <label><b>4) Do you have any job skills?</b></label>
                <Form.Radio
                  label='Yes'
                  name='sk'
                  value='sk_yes'
                  checked={this.state.sk == 'sk_yes'}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label='No'
                  name='sk'
                  value='sk_no'
                  checked={this.state.sk == 'sk_no'}
                  onChange={this.handleChange}
                />
              <p></p>
              <label>If so, what are your job skills?</label>
              <Form.Field
              control={TextArea}
              placeholder='Job skills'
              name='skills'
              value={skills}
              onChange={this.handleChange}
              />
          <p></p>
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
              <label>Action Item C</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_c1'
              value={action_item_c1}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_c1'
              value={proj_date_c1}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_c1'
              value={act_date_c1}
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
              <label>Action Item C</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_c2'
              value={action_item_c2}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_c2'
              value={proj_date_c2}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_c2'
              value={act_date_c2}
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
              <label>Action Item C</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_c3'
              value={action_item_c3}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_c3'
              value={proj_date_c3}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_c3'
              value={act_date_c3}
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
              <label>Action Item C</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_c4'
              value={action_item_c4}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_c4'
              value={proj_date_c4}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_c4'
              value={act_date_c4}
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
              <label>Action Item C</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_c5'
              value={action_item_c5}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_c5'
              value={proj_date_c5}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_c5'
              value={act_date_c5}
              onChange={this.handleChange}
              />

          <h2>Housing Plan</h2>
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
          <p></p>
          <p></p>
          <strong>onChange:</strong>
          <pre>{JSON.stringify({ first_name, last_name, dob, intake_date, num_children, date_discharge, dip, job, job_desc, emp_add, emp_phone, years_worked, mon_worked, hour_wage, bi_wage, mon_wage, tr, tr_pro, tr_loc, sk, skills,
            action_item_a1, proj_date_a1, act_date_a1, action_item_b1, proj_date_b1, act_date_b1, action_item_c1, proj_date_c1, act_date_c1,
            action_item_a2, proj_date_a2, act_date_a2, action_item_b2, proj_date_b2, act_date_b2, action_item_c2, proj_date_c2, act_date_c2,
            action_item_a3, proj_date_a3, act_date_a3, action_item_b3, proj_date_b3, act_date_b3, action_item_c3, proj_date_c3, act_date_c3,
            action_item_a4, proj_date_a4, act_date_a4, action_item_b4, proj_date_b4, act_date_b4, action_item_c4, proj_date_c4, act_date_c4,
            action_item_a5, proj_date_a5, act_date_a5, action_item_b5, proj_date_b5, act_date_b5, action_item_c5, proj_date_c5, act_date_c5,
            act_30, act_60, act_90, act_120
 }, null, 2)}</pre>
          <strong>onSubmit:</strong>
          <pre>{JSON.stringify({ submittedFirstName, submittedLastName, submitteddob, submittedIntake, submittedNumChildren, submittedDischargeDate, sub_dip, sub_job, sub_job_desc, sub_emp_add, sub_emp_phone, sub_years_worked, sub_mon_worked, sub_hour_wage, sub_bi_wage, sub_mon_wage, 
                                  sub_tr, sub_tr_pro, sub_tr_loc, sub_sk, sub_skills, 
                                  sub_action_item_a1, sub_proj_date_a1, sub_act_date_a1, sub_action_item_b1, sub_proj_date_b1, sub_act_date_b1, sub_action_item_c1, sub_proj_date_c1, sub_act_date_c1,
                                  sub_action_item_a2, sub_proj_date_a2, sub_act_date_a2, sub_action_item_b2, sub_proj_date_b2, sub_act_date_b2, sub_action_item_c2, sub_proj_date_c2, sub_act_date_c2,
                                  sub_action_item_a3, sub_proj_date_a3, sub_act_date_a3, sub_action_item_b3, sub_proj_date_b3, sub_act_date_b3, sub_action_item_c3, sub_proj_date_c3, sub_act_date_c3, 
                                  sub_action_item_a4, sub_proj_date_a4, sub_act_date_a4, sub_action_item_b4, sub_proj_date_b4, sub_act_date_b4, sub_action_item_c4, sub_proj_date_c4, sub_act_date_c4,
                                  sub_action_item_a5, sub_proj_date_a5, sub_act_date_a5, sub_action_item_b5, sub_proj_date_b5, sub_act_date_b5, sub_action_item_c5, sub_proj_date_c5, sub_act_date_c5,
                                  sub_act_30, sub_act_60, sub_act_90, sub_act_120
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

export default Intake;
