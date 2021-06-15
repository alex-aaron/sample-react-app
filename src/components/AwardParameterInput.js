import React, { Component } from 'react';
import AwardCategoriesContainer from './AwardCategoriesContainer'

class AwardParameterInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        categories: 0,
        submitted: false
      }
  }

  handleOnChange = event => {
      this.setState({
        categories: event.target.result
      })
  }

  handleSubmit = event => {
    this.setState({
        submitted: true
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>How many categories do you want to create? </label>
          <input type="text" id="categories" onChange={this.handleOnChange}></input><br></br>
          <input type="submit"></input>
        </form>
        <AwardCategoriesContainer categories={this.state.categories} />
      </div>
    );
  }
};

export default AwardParameterInput;