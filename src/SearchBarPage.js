import gnp from './GNP_Logo_RGB.png';
import './App.css';
import React, {Component} from 'react';
import { render } from "react-dom";
import { Button, Search, Dropdown, Grid, Segment} from 'semantic-ui-react';
import Bar from './Bar.js';


const options = [
  {key: 1, value: 1, text: "Alice"}, 
  {key: 2, value: 2, text: "Bob"}, 
  {key: 3, value: 3, text: "Claire"}
 ];

function SearchBarPage() {
  return (
    <div className="App">

        <h1>  </h1> 
    
      <h1>Intake Forms</h1>

       <a href='casenotes'><Button size='medium' color='blue' path=''> Case Notes </Button></a>
       <a href='indserviceplan'><Button size='medium' color='blue' path=''> Individual Service Plan </Button></a>
       <a href='housingplan'><Button size='medium' color='blue' path=''> Housing Plan </Button></a>
       <a href='assessmentintake'><Button size='medium' color='blue' path=''> AssessmentIntake </Button></a>
       <a href='referrallist'><Button size='medium' color='blue' path=''> Referral List </Button></a>

        <h2>  </h2>

        <h2>  </h2>




          <Grid columns='equal'>
            <Grid.Column>
            </Grid.Column>

            <Grid.Column width={3}>
              {/* <Search size='big' /> */}
              <Bar />
            </Grid.Column>

            <Grid.Column width={1}>
              <Dropdown icon='filter' text='sort by'>
                <Dropdown.Menu>
                <Dropdown.Item text='First Name' description='A - Z' />
                <Dropdown.Item text='First Name' description='Z - A' />
                <Dropdown.Item text='Last Name' description='A - Z' />
                <Dropdown.Item text='Last Name' description='Z - A' />
                <Dropdown.Item text='Age' description='youngest first' />
                <Dropdown.Item text='Age' description='oldest first' />
                </Dropdown.Menu>
              </Dropdown>
            </Grid.Column>

            <Grid.Column width={1}>
              <Button size='mini'> search </Button>
              
            </Grid.Column>

            <Grid.Column>
            </Grid.Column>
          </Grid>

          <h1>  </h1>   

          <Dropdown
            placeholder='Search'
            fluid
            multiple
            search
            selection
            options={options}
          />
          


    </div>
  );
}


export default SearchBarPage;

