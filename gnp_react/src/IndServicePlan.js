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
              action_item_b5: '', sub_action_item_b5: '', proj_date_b5: '', sub_proj_date_b5: '', act_date_b5: '', sub_act_date_b5: '', ssn: '', subssn: '', old_zip: '', new_zip: '', sub_old_zip: '', sub_new_zip: '',
              
  }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => {
      const { first_name, last_name, email, dob, intake_date, num_children, date_discharge, dip, job, job_desc, emp_add, emp_phone, years_worked, mon_worked, hour_wage, bi_wage, mon_wage, tr, tr_pro, tr_loc, sk, skills,
              action_item_a1, proj_date_a1, act_date_a1, action_item_b1, proj_date_b1, act_date_b1,
              action_item_a2, proj_date_a2, act_date_a2, action_item_b2, proj_date_b2, act_date_b2,
              action_item_a3, proj_date_a3, act_date_a3, action_item_b3, proj_date_b3, act_date_b3,
              action_item_a4, proj_date_a4, act_date_a4, action_item_b4, proj_date_b4, act_date_b4,
              action_item_a5, proj_date_a5, act_date_a5, action_item_b5, proj_date_b5, act_date_b5, ssn, red, orange, yellow, green, blue, old_zip, new_zip, 
              native_am, asian, black, hawaii, pacific, white, other_race, hispanic, male, female, trans_male, trans_female, non_bin, other_gen, no_response_gen, heteroseuxal, gay, lesbian, bisexual, asexual, queer, other_sexuality, single_woman, family

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
                      sub_action_item_b5: action_item_b5, sub_proj_date_b5: proj_date_b5, sub_act_date_b5: act_date_b5, subssn: ssn, subred: red, suborange: orange, subyellow: yellow, subgreen: green, subblue: blue, sub_old_zip: old_zip, sub_new_zip: new_zip, 
                      sub_native_am: native_am, sub_asian: asian, sub_black: black, sub_hawaii: hawaii, sub_white: white, sub_pacific: pacific, sub_other_race: other_race, sub_hispanic: hispanic, sub_male: male, sub_female: female, sub_trans_male: trans_male, sub_trans_female: trans_female,
                      sub_non_bin: non_bin, sub_other_gen: other_gen, sub_no_response_gen: no_response_gen, sub_heterosexual: heteroseuxal, sub_gay: gay, sub_lesbian: lesbian, sub_bisexual: bisexual, sub_asexual: asexual, sub_queer: queer, sub_other_sexuality: other_sexuality, sub_single_woman: single_woman, sub_family: family
                    })
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
      action_item_b5, sub_action_item_b5, proj_date_b5, sub_proj_date_b5, act_date_b5, sub_act_date_b5, ssn, subssn, red, subred, orange, suborange, yellow, subyellow, green, subgreen, blue, subblue, old_zip, sub_old_zip, new_zip, sub_new_zip,
      native_am, asian, black, hawaii, pacific, white, other_race, hispanic, male, female, trans_male, trans_female, non_bin, other_gen, no_response_gen, heteroseuxal, gay, lesbian, bisexual, asexual, queer, other_sexuality, single_woman, family,
      sub_native_am, sub_asian, sub_black, sub_hawaii, sub_pacific, sub_white, sub_other_race, sub_hispanic, sub_male, sub_female, sub_trans_male, sub_trans_female, sub_non_bin, sub_other_gen, sub_no_response_gen, sub_heterosexual, sub_gay, sub_lesbian, sub_bisexual, sub_asexual, sub_queer, sub_other_sexuality, sub_single_woman, sub_family
    } = this.state
  
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
                <label>Original Zip Code of Client (before GNP)</label>
               <Form.Input
                placeholder='Original Zip Code'
                name='old_zip'
                value={old_zip}
                onChange={this.handleChange}
              />
                <label>New Zip Code of Client (after GNP)</label>
               <Form.Input
                placeholder='New Zip Code'
                name='new_zip'
                value={new_zip}
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
              type="date"
              value={proj_date_a1}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a1'
              type="date"
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
              type="date"
              value={proj_date_b1}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b1'
              type="date"
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
              type="date"
              value={proj_date_a2}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a2'
              type="date"
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
              type="date"
              value={proj_date_b2}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b2'
              type="date"
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
              type="date"
              value={proj_date_a3}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a3'
              type="date"
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
              type="date"
              value={proj_date_b3}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b3'
              type="date"
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
              type="date"
              value={proj_date_a4}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a4'
              type="date"
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
              type="date"
              value={proj_date_b4}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b4'
              type="date"
              value={act_date_b4}
              onChange={this.handleChange}
              />

          <h3>Other</h3>
          
          <label>Action Item A</label>
              <Form.Field
              control={TextArea}
              placeholder='Action Item'
              name='action_item_a5'
              type="date"
              value={action_item_a5}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Projected Date of Completion'
              name='proj_date_a5'
              type="date"
              value={proj_date_a5}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_a5'
              type="date"
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
              type="date"
              value={proj_date_b5}
              onChange={this.handleChange}
              />
              <Form.Field
              control={TextArea}
              placeholder='Actual Date of Completion'
              name='act_date_b5'
              type="date"
              value={act_date_b5}
              onChange={this.handleChange}
              />

            <h3>Race</h3>
            <label><b>Native American or Alaska Native</b></label>
                <Form.Radio
                  name='native_am'
                  label='Yes'
                  value={true}
                  checked={this.state.native_am == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='native_am'
                  label='No'
                  value={false}
                  checked={this.state.native_am == false}
                  onChange={this.handleChange}
                  />

        <label><b>Asian</b></label>
                <Form.Radio
                  name='asian'
                  label='Yes'
                  value={true}
                  checked={this.state.asian == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='asian'
                  label='No'
                  value={false}
                  checked={this.state.asian == false}
                  onChange={this.handleChange}
                  />

<label><b>Black or African American</b></label>
                <Form.Radio
                  name='black'
                  label='Yes'
                  value={true}
                  checked={this.state.black == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='black'
                  label='No'
                  value={false}
                  checked={this.state.black == false}
                  onChange={this.handleChange}
                  />

<label><b>Native Hawaiian</b></label>
                <Form.Radio
                  name='hawaii'
                  label='Yes'
                  value={true}
                  checked={this.state.hawaii == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='hawaii'
                  label='No'
                  value={false}
                  checked={this.state.hawaii == false}
                  onChange={this.handleChange}
                  />

<label><b>Other Pacific Islander</b></label>
                <Form.Radio
                  name='pacific'
                  label='Yes'
                  value={true}
                  checked={this.state.pacific == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='pacific'
                  label='No'
                  value={false}
                  checked={this.state.pacific == false}
                  onChange={this.handleChange}
                  />

<label><b>White</b></label>
                <Form.Radio
                  name='white'
                  label='Yes'
                  value={true}
                  checked={this.state.white == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='white'
                  label='No'
                  value={false}
                  checked={this.state.white == false}
                  onChange={this.handleChange}
                  />


<label><b>Other</b></label>
                <Form.Radio
                  name='other_race'
                  label='Yes'
                  value={true}
                  checked={this.state.other_race == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='other_race'
                  label='No'
                  value={false}
                  checked={this.state.other_race == false}
                  onChange={this.handleChange}
                  />


<h3>Ethnicity</h3>
            <label><b>Hispanic or Latino</b></label>
                <Form.Radio
                  name='hispanic'
                  label='Yes'
                  value={true}
                  checked={this.state.hispanic == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='hispanic'
                  label='No'
                  value={false}
                  checked={this.state.hispanic == false}
                  onChange={this.handleChange}
                  />

<h3>Gender</h3>
            <label><b>Male</b></label>
                <Form.Radio
                  name='male'
                  label='Yes'
                  value={true}
                  checked={this.state.male == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='male'
                  label='No'
                  value={false}
                  checked={this.state.male == false}
                  onChange={this.handleChange}
                  />


<label><b>Female</b></label>
                <Form.Radio
                  name='female'
                  label='Yes'
                  value={true}
                  checked={this.state.female == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='female'
                  label='No'
                  value={false}
                  checked={this.state.female == false}
                  onChange={this.handleChange}
                  />


<label><b>Transgender Male</b></label>
                <Form.Radio
                  name='trans_male'
                  label='Yes'
                  value={true}
                  checked={this.state.trans_male == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='trans_male'
                  label='No'
                  value={false}
                  checked={this.state.trans_male == false}
                  onChange={this.handleChange}
                  />


<label><b>Transgender Female</b></label>
                <Form.Radio
                  name='trans_female'
                  label='Yes'
                  value={true}
                  checked={this.state.trans_female == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='trans_female'
                  label='No'
                  value={false}
                  checked={this.state.trans_female == false}
                  onChange={this.handleChange}
                  />


<label><b>Non-Binary/Non-Conforming</b></label>
                <Form.Radio
                  name='non_bin'
                  label='Yes'
                  value={true}
                  checked={this.state.non_bin == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='non_bin'
                  label='No'
                  value={false}
                  checked={this.state.non_bin == false}
                  onChange={this.handleChange}
                  />

<label><b>Other</b></label>
                <Form.Radio
                  name='other_gen'
                  label='Yes'
                  value={true}
                  checked={this.state.other_gen == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='other_gen'
                  label='No'
                  value={false}
                  checked={this.state.other_gen == false}
                  onChange={this.handleChange}
                  />


<label><b>No Response</b></label>
                <Form.Radio
                  name='no_response_gen'
                  label='Yes'
                  value={true}
                  checked={this.state.no_response_gen == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='no_response_gen'
                  label='No'
                  value={false}
                  checked={this.state.no_response_gen == false}
                  onChange={this.handleChange}
                  />

                  <h3>Sexuality</h3>

                  <label><b>Heterosexual</b></label>
                <Form.Radio
                  name='heteroseuxal'
                  label='Yes'
                  value={true}
                  checked={this.state.heteroseuxal == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='heteroseuxal'
                  label='No'
                  value={false}
                  checked={this.state.heteroseuxal == false}
                  onChange={this.handleChange}
                  />


<label><b>Gay</b></label>
                <Form.Radio
                  name='gay'
                  label='Yes'
                  value={true}
                  checked={this.state.gay == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='gay'
                  label='No'
                  value={false}
                  checked={this.state.gay == false}
                  onChange={this.handleChange}
                  />

<label><b>Lesbian</b></label>
                <Form.Radio
                  name='lesbian'
                  label='Yes'
                  value={true}
                  checked={this.state.lesbian == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='lesbian'
                  label='No'
                  value={false}
                  checked={this.state.lesbian == false}
                  onChange={this.handleChange}
                  />

<label><b>Bisexual</b></label>
                <Form.Radio
                  name='bisexual'
                  label='Yes'
                  value={true}
                  checked={this.state.bisexual == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='bisexual'
                  label='No'
                  value={false}
                  checked={this.state.bisexual == false}
                  onChange={this.handleChange}
                  />

<label><b>Asexual</b></label>
                <Form.Radio
                  name='asexual'
                  label='Yes'
                  value={true}
                  checked={this.state.asexual == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='asexual'
                  label='No'
                  value={false}
                  checked={this.state.asexual == false}
                  onChange={this.handleChange}
                  />


<label><b>Queer</b></label>
                <Form.Radio
                  name='queer'
                  label='Yes'
                  value={true}
                  checked={this.state.queer == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='queer'
                  label='No'
                  value={false}
                  checked={this.state.queer == false}
                  onChange={this.handleChange}
                  />


<label><b>Other</b></label>
                <Form.Radio
                  name='other_sexuality'
                  label='Yes'
                  value={true}
                  checked={this.state.other_sexuality == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='other_sexuality'
                  label='No'
                  value={false}
                  checked={this.state.other_sexuality == false}
                  onChange={this.handleChange}
                  />

                  <h3>Family Status</h3>

                  <label><b>Single Woman</b></label>
                <Form.Radio
                  name='single_woman'
                  label='Yes'
                  value={true}
                  checked={this.state.single_woman == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='single_woman'
                  label='No'
                  value={false}
                  checked={this.state.single_woman == false}
                  onChange={this.handleChange}
                  />

<label><b>Family</b></label>
                <Form.Radio
                  name='family'
                  label='Yes'
                  value={true}
                  checked={this.state.family == true}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  name='family'
                  label='No'
                  value={false}
                  checked={this.state.family == false}
                  onChange={this.handleChange}
                  />





<h3>Color Categories</h3>


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

          <p></p>
          <p></p>
          <strong>onChange:</strong>
          <pre>{JSON.stringify({ first_name, last_name, dob, intake_date, num_children, date_discharge, dip, job, job_desc, emp_add, emp_phone, years_worked, mon_worked, hour_wage, bi_wage, mon_wage, tr, tr_pro, tr_loc, sk, skills,
            action_item_a1, proj_date_a1, act_date_a1, action_item_b1, proj_date_b1, act_date_b1, 
            action_item_a2, proj_date_a2, act_date_a2, action_item_b2, proj_date_b2, act_date_b2, 
            action_item_a3, proj_date_a3, act_date_a3, action_item_b3, proj_date_b3, act_date_b3, 
            action_item_a4, proj_date_a4, act_date_a4, action_item_b4, proj_date_b4, act_date_b4,
            action_item_a5, proj_date_a5, act_date_a5, action_item_b5, proj_date_b5, act_date_b5, ssn, red, orange, yellow, green, blue, old_zip, new_zip,
            native_am, asian, black, hawaii, pacific, white, other_race, hispanic, male, female, trans_male, trans_female, non_bin, other_gen, no_response_gen, heteroseuxal, gay, lesbian, bisexual, asexual, queer, other_sexuality, single_woman, family,
 }, null, 2)}</pre>
          <strong>onSubmit:</strong>
          <pre>{JSON.stringify({ submittedFirstName, submittedLastName, submitteddob, submittedIntake, submittedNumChildren, submittedDischargeDate, sub_dip, sub_job, sub_job_desc, sub_emp_add, sub_emp_phone, sub_years_worked, sub_mon_worked, sub_hour_wage, sub_bi_wage, sub_mon_wage, 
                                  sub_tr, sub_tr_pro, sub_tr_loc, sub_sk, sub_skills, 
                                  sub_action_item_a1, sub_proj_date_a1, sub_act_date_a1, sub_action_item_b1, sub_proj_date_b1, sub_act_date_b1,
                                  sub_action_item_a2, sub_proj_date_a2, sub_act_date_a2, sub_action_item_b2, sub_proj_date_b2, sub_act_date_b2,
                                  sub_action_item_a3, sub_proj_date_a3, sub_act_date_a3, sub_action_item_b3, sub_proj_date_b3, sub_act_date_b3,
                                  sub_action_item_a4, sub_proj_date_a4, sub_act_date_a4, sub_action_item_b4, sub_proj_date_b4, sub_act_date_b4,
                                  sub_action_item_a5, sub_proj_date_a5, sub_act_date_a5, sub_action_item_b5, sub_proj_date_b5, sub_act_date_b5, subssn, subred, suborange, subyellow, subgreen, subblue, sub_old_zip, sub_new_zip,
                                  sub_native_am, sub_asian, sub_black, sub_hawaii, sub_pacific, sub_white, sub_other_race, sub_hispanic, sub_male, sub_female, sub_trans_male, sub_trans_female, sub_non_bin, sub_other_gen, sub_no_response_gen, sub_heterosexual, sub_gay, sub_lesbian, sub_bisexual, sub_asexual, sub_queer, sub_other_sexuality, sub_single_woman, sub_family
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
