import './App.css';
import './Display.css';
import {Image, Dropdown, Button, Tab, Icon} from 'semantic-ui-react';

function Display() {


  var info = 
    {
      firstname: 'Natalie',
      lastname: 'Smith',
      dob: '06/03/1982',
      num_children: 2,
      intake_date: '04/11/2022',
      date_of_discharge: 'N/A',
      colors: "Red, Blue, Yellow"
    }

    const panes = [
      { menuItem: 'New Resident Intake Form', render: () => 
      <Tab.Pane>
            <h2>New Resident Intake Form</h2>
            <h3 align = "left">First name:</h3>
            <h3 align = "left">Last name:</h3>
            <h3 align = "left">DOB:</h3>
            <h3 align = "left">Age:</h3>
            <h3 align = "left">Gender:</h3>
            <h3 align = "left">Social Security Number:</h3>
            <h3 align = "left">City/State of Birth:</h3>
            <h3 align = "left">Alias 1:</h3>
            <h3 align = "left">Referral Source:</h3>
            <h3 align = "left">Hispanic or Latino/a:</h3>
            <h3 align = "left">Veteran (ever served in active duty) in US Military?:</h3>
            <h3 align = "left">Married Name (Alias 2):</h3>
            <h3 align = "left">Marital Status:</h3>
            <h3 align = "left">Religious Faith:</h3>
            <h3 align = "left">Total number of persons in family:</h3>
            <h3 align = "left">Total number of adults (not including yourself):</h3>
            <h3 align = "left">Total number of children in family:</h3>
            <h3 align = "left">English-speaking skills:</h3>
            <h3 align = "left">Primary language spoken:</h3>
            <h3 align = "left">Secondary langauge spoken:</h3>
            <h3 align = "left">Country of Birth:</h3>
      </Tab.Pane> },

      { menuItem: 'Individual Service Plan', render: () => 
      <Tab.Pane>
            <h2>Individual Service Plan</h2>
            <h3 align = "left">First name:</h3>
            <h3 align = "left">Last name:</h3>
            <h3 align = "left">Last 4 of SSN:</h3>
            <h3 align = "left">Date of Birth:</h3>
            <h3 align = "left">Date of Birth:</h3>
            <h3 align = "left">Number of Children:</h3>
            <h3 align = "left">Date of discharge:</h3>
            <h3 align = "left">Original Zip Code of Client (before GNP):</h3>
            <h3 align = "left">New Zip Code of Client (after GNP):</h3>
        
      </Tab.Pane> },
      { menuItem: 'Statement of Identified Goals for Self-Sufficiency', render: () => 
      <Tab.Pane>
            <h2>Statement of Identified Goals for Self-Sufficiency</h2>
            <h3 align = "left">Training</h3>
            <h3 align = "left">Action Item A:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>
            <h3 align = "left">Action Item B:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>

            <h3 align = "left">Childcare</h3>
            <h3 align = "left">Action Item A:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>
            <h3 align = "left">Action Item B:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>

            <h3 align = "left">Employment</h3>
            <h3 align = "left">Action Item A:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>
            <h3 align = "left">Action Item B:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>

            <h3 align = "left">Housing</h3>
            <h3 align = "left">Action Item A:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>
            <h3 align = "left">Action Item B:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>

            <h3 align = "left">Other</h3>
            <h3 align = "left">Action Item A:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>
            <h3 align = "left">Action Item B:</h3>
            <h3 align = "left">Projected Date of Completion:</h3>
            <h3 align = "left">Actual Date of Completion:</h3>

            <h3 align = "left">Ethnicity:</h3>
            <h3 align = "left">Gender:</h3>
            <h3 align = "left">Sexuality:</h3>
            <h3 align = "left">Family:</h3>
            <h3 align = "left">Color categories:</h3>
 

      </Tab.Pane> },
      { menuItem: 'Housing Plan', render: () => 
      <Tab.Pane>
            <h2>Housing Plan</h2>
            <h3 align = "left">Phase 1 - 30-day Progress:</h3>
            <h3 align = "left">Phase 1 - 60-day Progress:</h3>
            <h3 align = "left">Phase 1 - 90-day Progress:</h3>
            <h3 align = "left">Phase 1 - 120-day Progress:</h3>
      </Tab.Pane> },

      { menuItem: 'Case Notes', render: () => 
      <Tab.Pane>Tab 5 Content
            <h2>Case Notes</h2>
            <h3 align = "left">Notes:</h3>
        
      </Tab.Pane> },
      
      { menuItem: 'Referral List', render: () => 
      <Tab.Pane>
        <h2>Referral List</h2>
        <h3 align = "left">Referral 1:</h3>
        <h3 align = "left">Date 1:</h3>

        <h3 align = "left">Referral 2:</h3>
        <h3 align = "left">Date 2:</h3>

        <h3 align = "left">Referral 3:</h3>
        <h3 align = "left">Date 3:</h3>

        <h3 align = "left">Referral 4:</h3>
        <h3 align = "left">Date 4:</h3>

        <h3 align = "left">Referral 5:</h3>
        <h3 align = "left">Date 5:</h3>

        <h3 align = "left">Referral 6:</h3>
        <h3 align = "left">Date 6:</h3>

        <h3 align = "left">Referral 7:</h3>
        <h3 align = "left">Date 7:</h3>

        <h3 align = "left">Referral 8:</h3>
        <h3 align = "left">Date 8:</h3>

        <h3 align = "left">Referral 9:</h3>
        <h3 align = "left">Date 9:</h3>

        <h3 align = "left">Referral 10:</h3>
        <h3 align = "left">Date 10:</h3>

      </Tab.Pane> },
    ]  

  var child1 = 
  {
    firstname: 'Martha',
    lastname: 'Smith',
    dob: '03/14/2008',
    intake_date: '04/11/2022',
    school: 'Central Middle School',
    grade: 8
  }

  var child2 = 
  {
    firstname: 'Connor',
    lastname: 'Smith',
    dob: '03/14/2010',
    intake_date: '04/11/2022',
    school: 'Cedar Middle School',
    grade: 6
  }

  var spouse = 
  {
    firstname: 'Alex',
    lastname: 'Smith',
    dob: '03/14/1980',
    intake_date: '04/11/2022'
  }


  return (
    <div className="App">
      <div class = "container-horiz-right">  
        <div class = "container-horiz-center">
          <h1>{info.firstname} {info.lastname} </h1>
        </div>
        <Button>Edit</Button>
      </div>
      <div class="container-horiz">
        <Image src="//style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="no photo available" class="w100px" />
        <div class = "container-vert" align = "left">
          <h2>Date of birth: {info.dob}</h2>
          <h2>Number of children: {info.num_children}</h2>
          <h2>{info.colors}</h2>
          <div class = "container-horiz-color">
            <Icon name = "circle" size = "big" color = "red"></Icon>
            <Icon name = "circle" size = "big" color = "orange"></Icon>
            <Icon name = "circle" size = "big" color = "yellow"></Icon>
            <Icon name = "circle" size = "big" color = "green"></Icon>
            <Icon name = "circle" size = "big" color = "blue"></Icon>
          </div>
        </div>
        <div class = "container-vert" align = "left">
          <h2>Intake date: {info.intake_date} </h2>
          <h2>Date of discharge: {info.date_of_discharge} </h2>
        </div>
      </div>

      <div class = "container-horiz-tab">
        <div class = "container-vert">
          <h2>Files and Information</h2>
          <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} style={{ width:"1000px" }}/>
        </div>
        <div class = "container-vert" align = "center">
          <h2>Related people</h2>
          <div class = "rp-container">
            <div class = "container-vert" align = "left">
              <Image src="//style.anu.edu.au/_anu/4/images/placeholders/person.png" width = "100"/>
            </div>
            <div class = "container-vert" align = "left">
              <h2>{child1.firstname} {child2.lastname}</h2>     
            </div>
          </div>
          <div class = "rp-container">
            <div class = "container-vert" align = "left">
              <Image src="//style.anu.edu.au/_anu/4/images/placeholders/person.png" width = "100"/>
            </div>
            <div class = "container-vert" align = "left">
              <h2>{child2.firstname} {child2.lastname}</h2>     
            </div>
          </div>
          <div class = "rp-container">
          < div class = "container-vert" align = "left">
              <Image src="//style.anu.edu.au/_anu/4/images/placeholders/person.png" width = "100"/>
            </div>
            <div class = "container-vert" align = "left">
              <h2>{spouse.firstname} {spouse.lastname}</h2>     
            </div>
          </div>
        </div>
      </div>
    
      <div class = "container-horiz">
        <div class = "container-vert" align = "center">
          <h2>Files</h2>
          <div class = "container-horiz-white">
            <a href="#" class="buttontest">New Resident Intake Form</a>
          </div>
          <div class = "container-horiz-white">
            <a href="#" class="buttontest">Case Management Day 1</a>
          </div>
          <div class = "container-horiz-white">
            <a href="#" class="buttontest">Case Management Day 30</a>
          </div>
          <div class = "container-horiz-white">
            <a href="#" class="buttontest">Case Management Day 60</a>
          </div>
          <div class = "container-horiz-white">
            <a href="#" class="buttontest">Case Management Day 90</a>
          </div>
        </div>


        <div class = "container-vert">
          <div class = "form">
            <h2>New Resident Intake Form</h2>
            <h3 align = "left">First name:</h3>
            <h3 align = "left">Last name:</h3>
            <h3 align = "left">DOB:</h3>
            <h3 align = "left">Age:</h3>
            <h3 align = "left">Gender:</h3>
            <h3 align = "left">Social Security Number:</h3>
            <h3 align = "left">City/State of Birth:</h3>
            <h3 align = "left">Alias 1:</h3>
            <h3 align = "left">Referral Source:</h3>
            <h3 align = "left">Hispanic or Latino/a:</h3>
            <h3 align = "left">Veteran (ever served in active duty) in US Military?:</h3>
            <h3 align = "left">Married Name (Alias 2):</h3>
            <h3 align = "left">Marital Status:</h3>
            <h3 align = "left">Religious Faith:</h3>
            <h3 align = "left">Total number of persons in family:</h3>
            <h3 align = "left">Total number of adults (not including yourself):</h3>
            <h3 align = "left">Total number of children in family:</h3>
            <h3 align = "left">English-speaking skills:</h3>
            <h3 align = "left">Primary language spoken:</h3>
            <h3 align = "left">Secondary langauge spoken:</h3>
            <h3 align = "left">Country of Birth:</h3>
          </div>
        </div>
        <div class = "container-vert" align = "center">
          <h2>Related people</h2>
          <div class = "rp-container">
            <div class = "container-vert" align = "left">
              <Image src="//style.anu.edu.au/_anu/4/images/placeholders/person.png" width = "100"/>
            </div>
            <div class = "container-vert" align = "left">
              <h2>{child1.firstname} {child2.lastname}</h2>     
            </div>
          </div>
          <div class = "rp-container">
            <div class = "container-vert" align = "left">
              <Image src="//style.anu.edu.au/_anu/4/images/placeholders/person.png" width = "100"/>
            </div>
            <div class = "container-vert" align = "left">
              <h2>{child2.firstname} {child2.lastname}</h2>     
            </div>
          </div>
          <div class = "rp-container">
          < div class = "container-vert" align = "left">
              <Image src="//style.anu.edu.au/_anu/4/images/placeholders/person.png" width = "100"/>
            </div>
            <div class = "container-vert" align = "left">
              <h2>{spouse.firstname} {spouse.lastname}</h2>     
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
