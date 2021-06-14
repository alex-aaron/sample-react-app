import React, { Component } from 'react';

class AwardParameterInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        categories: 0
      }
  }


  render() {

    return (
      <div>
        <form onYearSubmit={this.handleYearSubmit}>
          <label>Category Name: </label>
          <input type="text" id="category" onChange={this.handleOnChange}></input><br></br>
          <label>Nominee 1:</label>
          <input type="text" id="nominee1"></input><br></br>
        </form>
      </div>
    );
  }
};

export default AwardParameterInput;