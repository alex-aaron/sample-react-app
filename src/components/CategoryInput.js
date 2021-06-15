import React, { Component } from 'react';
import AwardCategoriesContainer from './AwardCategoriesContainer'

class CategoryInput extends Component {

  constructor(props) {
    super() 
      this.state = {
        categoryName: "",
        nominee1: "",
        nominee2: "",
        nominee3: "",
        nominee4: "",
        nominee5: "",
        winner: ""
      }
  }


  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Category Name: </label>
          <input type="text" id="categoryName" onChange={this.handleOnChange}></input><br></br>
          <label>Nominee 1: </label>
          <input type="text" id="nominee1" onChange={event => this.handleOnChange}></input><br></br>
          <label>Nominee 2: </label>
          <input type="text" id="nominee2" onChange={event => this.handleOnChange}></input><br></br>
          <label>Nominee 3: </label>
          <input type="text" id="nominee3" onChange={event => this.handleOnChange}></input><br></br>
          <label>Nominee 4: </label>
          <input type="text" id="nominee4" onChange={event => this.handleOnChange}></input><br></br>
          <label>Nominee 5: </label>
          <input type="text" id="nominee5" onChange={event => this.handleOnChange}></input><br></br>
          <label>Winner: </label>
          <input type="text" id="winner" onChange={event => this.handleOnChange}></input><br></br>
          <input type="submit"></input>
        </form>
        <AwardCategoriesContainer categories={this.state.categories} />
      </div>
    );
  }
};

export default CategoryInput;