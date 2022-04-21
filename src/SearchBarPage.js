import gnp from './GNP_Logo_RGB.png';
import './App.css';
import React, {Component} from 'react';
import { render } from "react-dom";
import { Button, Search, Dropdown, Grid, Segment} from 'semantic-ui-react';
import Bar from './Bar.js';
import Data from "./data.json"

const options = [
  {key: 1, value: 1, text: "Alice"}, 
  {key: 2, value: 2, text: "Bob"}, 
  {key: 3, value: 3, text: "Claire"}
 ];

function SearchBarPage() {
  return (
    <div className="App">

        <h1>  </h1> 
        
        <img src={gnp} className="gnp-logo" alt = "logo"/>

        <h1> Case Management Database </h1>
    
        <Button size='massive' color='blue'> ADD NEW RECORD </Button>

        <h2>  </h2>

          <h1>  </h1> 


          <Grid columns='equal'>
            <Grid.Column>
            </Grid.Column>

            <Grid.Column width={9}>
              {/* <Search size='big' /> */}
              {/* <Bar /> */}

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



            </Grid.Column>

            <Grid.Column width={2}>
              <Dropdown icon='filter' text='search by'>
                <Dropdown.Menu>
                <Dropdown.Item text='First Name' />
                <Dropdown.Item text='Last Name' />
                <Dropdown.Item text='Last Name' />
                <Dropdown.Item text='Age' />
                <Dropdown.Item text='Intake Period' />
                <Dropdown.Item text='SSN' description='last 4 digits' />
                </Dropdown.Menu>
              </Dropdown>
            </Grid.Column>

            <Grid.Column width={1}>
              {/* <Button size='mini'> search </Button> */}
              
            </Grid.Column>

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

