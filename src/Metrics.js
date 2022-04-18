import './App.css';

import {Dropdown, Table} from 'semantic-ui-react';
import {CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, LineChart, Pie, PieChart, Bar, BarChart, RadialBar, RadialBarChart} from 'recharts';

const numberOfClients = [
  {
    "name": "Carryover from Dec",
    "Clients": 20,
    "Households": 9,
  },
  {
    "name": "Jan-Mar (new)",
    "Clients": 29,
    "Households": 4,
  },
  {
    "name": "Apr-Jun (new)",
    "Clients": 20,
    "Households": 2,
  },
  {
    "name": "Jul-Sept (new)",
    "Clients": 49,
    "Households": 11,
  },
  {
    "name": "Oct-Dec (new)",
    "Clients": 12,
    "Households": 3,
  }
]

const population = [
  {
    "name": "Single Women",
    "value": 400
  },
  {
    "name": "Families",
    "value": 300
  }
];

const someOtherThingForOuterRadius = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];

const exitClients = [
  {
    "name": "120 Days",
    "Clients": 100
  },
  {
    "name": "180 Days",
    "Clients": 300
  },
  {
    "name": "270 Days",
    "Clients": 200
  }
]

const range = [
  { key: 'Past 6 months', value: 'Past 6 months',  text: 'Past 6 months' },
  { key: 'Past 12 months', value: 'Past 12 months',  text: 'Past 12 months' },  
  { key: 'Past 2 years', value: 'Past 2 years',  text: 'Past 2 years' },
  { key: 'All time', value: 'All time',  text: 'All time' },  
]

const options = [
  { key: '', value: '',  text: '' }, 
]

const age = [
  {
    "name": "0-17",
    "Number of Clients": 10,
    "fill": "#ffc658"
  },
  {
    "name": "18-24",
    "Number of Clients": 40,
    "fill": "#8884d8"
  },
  {
    "name": "25-29",
    "Number of Clients": 25,
    "fill": "#83a6ed"
  },
  {
    "name": "30-34",
    "Number of Clients": 19,
    "fill": "#8dd1e1"
  },
  {
    "name": "35-39",
    "Number of Clients": 14,
    "fill": "#82ca9d"
  },
  {
    "name": "40-49",
    "Number of Clients": 11,
    "fill": "#a4de6c"
  },
  {
    "name": "50+",
    "Number of Clients": 8,
    "fill": "#d0ed57"
  }
]

const race = [
  {
    "name": "Native American or Alaskan native",
    "Number of Clients": 10,
    "fill": "#ffc658"
  },
  {
    "name": "Asian",
    "Number of Clients": 40,
    "fill": "#8884d8"
  },
  {
    "name": "Black or African American",
    "Number of Clients": 25,
    "fill": "#83a6ed"
  },
  {
    "name": "Native Hawaiian",
    "Number of Clients": 19,
    "fill": "#8dd1e1"
  },
  {
    "name": "Other Pacific Islander",
    "Number of Clients": 14,
    "fill": "#82ca9d"
  },
  {
    "name": "White",
    "Number of Clients": 11,
    "fill": "#a4de6c"
  },
  {
    "name": "Other Multi-Racial",
    "Number of Clients": 8,
    "fill": "#d0ed57"
  }
]


function Metrics() {
  return (
    
    <div className="App">
      
      <header className="App-header"> 
        <div>
          <h1 className = "Summary"> Summary</h1> 

          <div className = "timeRange">
              <Dropdown
                placeholder='Select'
                fluid
                selection
                options={range}/>
          </div>
  
          <div id='time'> By Time: </div>
        </div>
      </header>

      <h2 className = "graphHead" id= 'pops'> Population Demographics: </h2>
        
      <div className = "top">
        <div className = "population">
            <PieChart width={400} height={500}>
              <Pie data={population} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={180} fill="#8884d8" label />
              <Pie data={someOtherThingForOuterRadius} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={120} fill="#82ca9d" label />
            </PieChart>
        </div>

        <div className = 'TABLES'>
          <div className = "table">
              <Table fixed id = 'pop'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Population</Table.HeaderCell>
                        <Table.HeaderCell>Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                      <Table.Cell>Single Women</Table.Cell>
                      <Table.Cell>50</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                      <Table.Cell>Familes</Table.Cell>
                      <Table.Cell>20</Table.Cell>
                    </Table.Row>
                </Table.Body>
              </Table>
          </div>
          <br></br>
          <div className = "table">

              <Table fixed id = 'child'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Population</Table.HeaderCell>
                        <Table.HeaderCell>Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Adults</Table.Cell>
                        <Table.Cell>50</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Children</Table.Cell>
                        <Table.Cell>20</Table.Cell>
                    </Table.Row>
                </Table.Body>
              </Table>
          </div>
        </div>

        <div className = 'demographics'> 
          <div className = 'age'>
          <h3 className = "graphHead" id= 'ages'> Age: </h3>
              <RadialBarChart 
                width={500} 
                height={300} 
                innerRadius="5%" 
                outerRadius="100%" 
                data={age} 
                startAngle={180} 
                endAngle={0}>
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'outsideStart' }} background clockWise={true} dataKey='Number of Clients' />
                <Legend  iconSize={10} width={100} height={140} layout='vertical' verticalAlign='top' align="right" />
                <Tooltip />
              </RadialBarChart>
          </div>

          <div className = 'race'>
          <h3 className = "graphHead" id= 'races'> Race: </h3>
            <RadialBarChart 
              width={500} 
              height={300} 
              innerRadius="5%" 
              outerRadius="100%" 
              data={race} 
              startAngle={180} 
              endAngle={0}>
              <RadialBar minAngle={15} label={{ fill: '#666', position: 'outsideStart' }} background clockWise={true} dataKey='Number of Clients' />
              <Legend iconSize={10} width={150} height={100} layout='vertical' verticalAlign='top' align="right"/>
              <Tooltip />
            </RadialBarChart>
          </div>
        </div>
      </div>

      
      <div className = "mid">
        <h2 className = "graphHead"> Program Participant Arrival/Departures: </h2>
        <h3 className = "graphHead" id= 'clis'> Number of Clients and Households: </h3>
        <div className = "numberClients">
            <LineChart width={640} height={350} data={numberOfClients} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Clients" stroke="#8884d8" />
              <Line type="monotone" dataKey="Households" stroke="#82ca9d" />
            </LineChart>
        </div>


        <h3 id= 'numExitCli'> Program Departures Exit Program to Permanent Housing within ___ days: </h3>
        <div className = "exitedClients">
          <BarChart width={730} height={250} data={exitClients}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Clients" fill="#8884d8" />
          </BarChart>
        </div>

        <br></br>
        <br></br>

        <Dropdown
          placeholder='Search More'
          fluid
          multiple
          search
          selection
          options={options}/>

      </div>

      <br></br>
      <br></br>

      <div className = 'bottom'>
       
      </div>

    </div>
  );
}

export default Metrics;
