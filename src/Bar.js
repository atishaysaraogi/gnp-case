import React, { Component } from "react";
import { render } from "react-dom";
import { Search } from "semantic-ui-react";



const results = [
    {
      name: "John Apple",
      age: 14
    },
    {
      name: "Natalie Smith",
      age: 20
    },
    {
      name: "Mary Brown",
      age: 92
    }];

class Bar extends Component {

    render() {
      
      const resRender = ({ name, age }) => (
        <span key="name">
          {name}, {age} yo
        </span>
      );
      return (
  
        <Search
          fluid
          icon="search"
          placeholder="Search..."
          results={results}
          resultRenderer={resRender}
        />

        
      );
    }
  }
  
  export default Bar;