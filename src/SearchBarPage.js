import gnp from './GNP_Logo_RGB.png';
import './App.css';
import React, {Component} from 'react';
import { render } from "react-dom";
import { Button, Search, Dropdown, Grid, Segment, Tab} from 'semantic-ui-react';
import Bar from './Bar.js';
import Data from "./data.json"
import DataSSN from "./data_ssn.json"
import DataAge from "./data_age.json"


const options = [
  {key: 1, value: 1, text: "Alice"}, 
  {key: 2, value: 2, text: "Bob"}, 
  {key: 3, value: 3, text: "Claire"}
 ];

 const panes = [
  { menuItem: 'Search by Name', render: () => <Tab.Pane>
    <Dropdown
                button
                className='icon'
                fluid
                labeled
                icon='search'
                options={Data}
                search
                text='Search'
              />
  </Tab.Pane> },
  { menuItem: 'Search by SSN', render: () => <Tab.Pane>
    <Dropdown
                button
                className='icon'
                fluid
                labeled
                icon='search'
                options={DataSSN}
                search
                text='Search'
              />
  </Tab.Pane> },
  { menuItem: 'Search by Age', render: () => <Tab.Pane>
    <Dropdown
                button
                className='icon'
                fluid
                labeled
                icon='search'
                options={DataAge}
                search
                text='Search'
              />
  </Tab.Pane> },
]

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

            <Grid.Column width={9}>
              {/* <Search size='big' /> */}
              {/* <Bar /> */}

              {/* <Dropdown
                button
                className='icon'
                fluid
                labeled
                icon='search'
                options={Data}
                search
                text='Search'
              /> */}

              <Tab panes={panes} />





            </Grid.Column>


            {/* <Grid.Column width={2}>
              <Dropdown icon='filter' text='search by'>
                <Dropdown.Menu>
                <Dropdown.Item text='Name' />
                <Dropdown.Item text='Age' />
                <Dropdown.Item text='Intake Period' />
                <Dropdown.Item text='SSN' description='last 4 digits' />
                </Dropdown.Menu>
              </Dropdown>
            </Grid.Column> */}


            <Grid.Column>
            </Grid.Column>
          </Grid>

          <h1>  </h1>   

          {/* <Dropdown
            placeholder='Search'
            fluid
            multiple
            search
            selection
            options={options}
          /> */}


          
          


    </div>
  );
}


export default SearchBarPage;
