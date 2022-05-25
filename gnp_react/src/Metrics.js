import './App.css';

import React, { useCallback, useState } from "react";

import {Dropdown, Table} from 'semantic-ui-react';
import {CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, LineChart, PieChart, Pie, Cell, Sector, Bar, BarChart, RadialBar, RadialBarChart} from 'recharts';

const numberOfClients = [
  {"name": "Carryover from Dec", "Clients": 20, "Households": 9},
  {"name": "Jan-Mar (new)", "Clients": 29, "Households": 4},
  {"name": "Apr-Jun (new)", "Clients": 20, "Households": 2},
  {"name": "Jul-Sept (new)", "Clients": 49, "Households": 11},
  {"name": "Oct-Dec (new)", "Clients": 12, "Households": 3}
]

const population = [
  {"name": "Single Women", "value": 8},
  {"name": "Families", "value": 10}
];

const children = [
  {"name": "Children", "value": 20},
  {"name": "Adults", "value": 45}
];

const exitClients = [
  {"name": "120 Days", "Clients": 100},
  {"name": "180 Days", "Clients": 300},
  {"name": "270 Days", "Clients": 200}
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
  {"name": "0-17", Clients: 10, "fill": "#ffc658"},
  {"name": "18-24", "Clients": 40, "fill": "#8884d8"},
  {"name": "25-29", "Clients": 25, "fill": "#83a6ed"},
  {"name": "30-34", "Clients": 19, "fill": "#8dd1e1"},
  {"name": "35-39", "Clients": 14, "fill": "#82ca9d"},
  {"name": "40-49", "Clients": 11, "fill": "#a4de6c"},
  {"name": "50+", "Clients": 8, "fill": "#d0ed57"}
];

const sexuality = [
  {"name": "Heterosexual", "value": 10, "fill": "#ffc658"},
  {"name": "Gay", "value": 40, "fill": "#8884d8"},
  {"name": "Lesbian", "value": 25, "fill": "#83a6ed"},
  {"name": "Bisexual", "value": 19, "fill": "#8dd1e1"},
  {"name": "Asexual", "value": 14, "fill": "#82ca9d"},
  {"name": "Queer", "value": 11, "fill": "#a4de6c"},
  {"name": "Other", "value": 8, "fill": "#d0ed57"}
];

const race = [
  { name: 'Native American or Alaskan native', value: 10, fill: "#ffc658"},
  { name: 'Asian', value: 30, fill:"#8884d8" },
  { name: 'Black or African American', value: 25, fill: "#83a6ed"},
  { name: 'Native Hawaiian', value: 20, fill:"#8dd1e1"},
  { name: 'Other Pacific Islander', value: 15, fill:"#82ca9d" },
  { name: 'White', value: 25, fill: "#a4de6c"},
  { name: 'Other Multi-Racial', value: 10, fill:"#d0ed57"}
];

const gender = [
  { name: 'Woman', value: 10, fill: "#005f73"},
  { name: 'Man', value: 30, fill:"#0a9396" },
  { name: 'Transgender Woman', value: 25, fill: "#94d2bd"},
  { name: 'Transgender Man', value: 20, fill:"#e9d8a6"},
  { name: 'Non-binary/non-conforming', value: 15, fill:"#ee9b00" },
  { name: 'Other', value: 25, fill: "#ca6702"},
  { name: 'No Response', value: 10, fill:"#bb3e03"}
];


const COLORS = ['#0088FE', '#00C49F'];
const COLOR = ['#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, payload, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text x={x} y={y} fill="#000" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${payload.name}`} 
      </text>
      <text x={x} y={y+20} fill="#333" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`Clients: ${payload.value}`}
      </text>
    </g>
  );
};


const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {cx, cy, midAngle,innerRadius,outerRadius,startAngle,endAngle,fill,payload,value} = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill}/>
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill}/>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {`${payload.name}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`Clients: ${value}`}
      </text>
    </g>
  );
};

function Metrics() {

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

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
            <PieChart width={450} height={390}>
            <Pie data={children} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={130} outerRadius={180} fill="#8884d8" labelLine = {false} label = {false} activeIndex={activeIndex} activeShape={renderActiveShape} onMouseEnter={onPieEnter} >
              {population.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
            </Pie>

              <Pie data={population} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={120} fill="#82ca9d" label= {renderCustomizedLabel} labelLine = {false}>
              {population.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLOR[index % COLOR.length]} />))}
                </Pie>
            </PieChart>
        </div>

        <div className = 'topTables'>
          <div className = "table">
              <Table fixed id = 'pop'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Population</Table.HeaderCell>
                        <Table.HeaderCell>Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                  {Object.values(population).map(
                    ({ name, value }) => {
                      return (
                        <Table.Row>
                          <Table.Cell>{name}</Table.Cell>
                          <Table.Cell>{value}</Table.Cell>
                        </Table.Row>
                      );
                    }
                  )}
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
                  {Object.values(children).map(
                    ({ name, value }) => {
                      return (
                        <Table.Row>
                          <Table.Cell>{name}</Table.Cell>
                          <Table.Cell>{value}</Table.Cell>
                        </Table.Row>);}
                  )}
                </Table.Body>
              </Table>
          </div>
        </div>

        <div className = 'demographics'> 
          <div className = 'age'>
          <h3 className = "graphHead" id= 'ages'> Age: </h3>
              <RadialBarChart width={500} height={300} innerRadius="5%" outerRadius="100%" data={age} startAngle={180} endAngle={0}>
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'outsideStart' }} background clockWise={true} dataKey='Clients' />
                <Legend  iconSize={10} width={100} height={140} layout='vertical' verticalAlign='top' align="right" />
                <Tooltip />
              </RadialBarChart>
          </div>

          <div className = 'race'>
            <h3 className = "graphHead"  id= 'races'> Race: </h3>
            <PieChart width={800} height={310}>
              <Pie dataKey="value" startAngle={180} endAngle={0} data={race} cx="50%" cy="50%" outerRadius={115} fill="#8884d8" label activeIndex={activeIndex} activeShape={renderActiveShape} onMouseEnter={onPieEnter} />
            </PieChart>
          </div>
        </div> 
      </div>

      <div className = "upMid">
          <div className = "gen">
              <div className = "table">
                <Table fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Population</Table.HeaderCell>
                            <Table.HeaderCell>Number</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {Object.values(gender).map(
                        ({ name, value }) => {
                          return (
                            <Table.Row>
                              <Table.Cell>{name}</Table.Cell>
                              <Table.Cell>{value}</Table.Cell>
                            </Table.Row>
                          );
                        }
                      )}
                    </Table.Body>
                  </Table>
              </div>
            </div>

            <div className = "gender-sexuality">

              <div className = "sexualityPie">
                  <h3 className = 'sexuality'> Sexuality: </h3>
                  <br></br>
                  <RadialBarChart width={450} height={336} innerRadius="10%" outerRadius="100%" data={sexuality} startAngle={90} endAngle={-90}>
                    <RadialBar minAngle={15} label={{ fill: '#00', position: 'outsideStart' }} background clockWise={true} dataKey='value' />
                    <Legend  iconSize={10} width={110} height={140} layout='vertical' verticalAlign='top' align="right" />
                    <Tooltip />
                </RadialBarChart>  
              </div>

              <div className = "genPie">
                <h3 className = "graphHead" id= 'gender'> Gender: </h3>
                <PieChart width={730} height={400}>
                  <Pie dataKey="value" startAngle={90} endAngle={270} data={gender} cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label activeIndex={activeIndex} activeShape={renderActiveShape} onMouseEnter={onPieEnter} />
                </PieChart>
              </div>
            </div>
            
            <div className = "sx">
              <div className = 'table'>
                <Table fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Population</Table.HeaderCell>
                            <Table.HeaderCell>Number</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {Object.values(sexuality).map(
                        ({ name, value }) => {
                          return (
                            <Table.Row>
                              <Table.Cell>{name}</Table.Cell>
                              <Table.Cell>{value}</Table.Cell>
                            </Table.Row>
                          );
                        }
                      )}
                    </Table.Body>
                  </Table>
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
