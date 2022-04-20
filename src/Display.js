import './App.css';
import './Display.css';
import {Image, Dropdown, Button} from 'semantic-ui-react';

function Display() {


  var info = 
    {
      firstname: 'Natalie',
      lastname: 'Smith',
      dob: '06/03/1982',
      num_children: 2,
      intake_date: '04/11/2022',
      date_of_discharge: 'N/A'
    }

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
      <h1>{info.firstname} {info.lastname} </h1>
      <div class="container-horiz">
        <Image src="//style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="no photo available" class="w100px" />
        <div class = "container-vert" align = "left">
          <h2>Date of birth: {info.dob}</h2>
          <h2>Number of children: {info.num_children}</h2>
        </div>
        <div class = "container-vert" align = "left">
          <h2>Intake date: {info.intake_date} </h2>
          <h2>Date of discharge: {info.date_of_discharge} </h2>
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
            <a href="#" class="buttontest">Case Management Day 60</a>
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








Child Last Name
Child First Name
Child DOB
Child School Attending
Child Gender
Child Age
Child SSN
Number of children living at New Life
Number of children not living at New Life
Why are they (children not living at New Life) not living with you?
Why and who are they (children not living at New Life) with?
How long have you lived apart from your children?
English-speaking skills
Primary language spoken
Secondary langauge spoken
Country of Birth
Do you have any difficultly reading?
Higest grade completed
Where did you complete highest grade?
If no high school diploma, are you in a GED program?
Other vocational training/college hours
How long did you attend college? Where?
Are you currently employed?
Job title/description (of current or most recent job)
Employer address
Employer phone number
Full time or part time?
Amount per pay period
Hours per week
Hourly wage
Type of work
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
