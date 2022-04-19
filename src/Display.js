import './App.css';
import './Display.css';
import { Image, Dropdown, Button} from 'semantic-ui-react';

function Display() {


  var info = 
    {
      firstname: 'fname',
      lastname: 'lname',
      dob: '06/03/2002',
      num_children: 0,
      intake_date: '04/11/2022',
      date_of_discharge: 'N/A'
    }

  return (
    <div className="App">
      <h1>{info.firstname} {info.lastname} </h1>
      <div class="container-horiz">
        <Image src='https://via.placeholder.com/150' size='small' />
        <div class = "container-vert" align = "left">
          <h2>Date of birth: {info.dob}</h2>
          <h2>Number of children: {info.num_children}</h2>
        </div>
        <div class = "container-vert" align = "left">
          <h2>Intake date: {info.intake_date} </h2>
          <h2>Date of discharge: {info.date_of_discharge} </h2>
        </div>
      </div>

      <div class = "container-vert" align = "left">
        <h2>Files</h2>
        <div class = "container-horiz-white">
          <Dropdown text='Case Management Files'>
            <Dropdown.Menu>
              <Dropdown.Item text='Case Management Day 1' />
              <Dropdown.Item text='Case Management Day 30' />
              <Dropdown.Item text='Case Management Day 60' />
              <Dropdown.Item text='Case Management Day 90' />
              <Dropdown.Item text='Other case management notes' />
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div class = "container-horiz">
          <button type = "buttontest">New Resident Intake Form</button>
        </div>
        <div class = "container-horiz-white">
          <a href="#" class="buttontest">Case Management Day 1</a>
        </div>
        <div class = "container-horiz">
          <Button fluid>Case Management Day 30</Button>
        </div>
        <div class = "container-horiz-white">
          <Button fluid>Case Management Day 60</Button>
        </div>
        <div class = "container-horiz-white">
          <Button fluid>Case Management Day 90</Button>
        </div>
      </div>
      



      <button>Related people</button>

    </div>
  );
}

export default Display;
