import React, { Component } from "react";
import { render } from "react-dom";
import { Search } from "semantic-ui-react";

const results = [
    {
      name: "John",
      age: 14
    },
    {
      name: "Mary",
      age: 92
    }];

class Bar extends Component {

    render() {
      
      const resRender = ({ name, age }) => (
        <span key="name">
          {name} is {age} yo
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