import React, { Component } from 'react';

class AwardParameterInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        categories: 0
      }
  }

  handleOnChange = event => {
      this.setState({
        categories: event.target.result
      })
  }

  handleSubmit = event => {

  }


  render() {

    return (
      <div>
        <form onYearSubmit={this.handleYearSubmit}>
          <label>How many categories do you want to create? </label>
          <input type="text" id="categories" onChange={this.handleOnChange}></input><br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default AwardParameterInput;