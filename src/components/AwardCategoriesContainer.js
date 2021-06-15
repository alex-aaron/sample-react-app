import React, { Component } from 'react';
import CategoryInput from './CategoryInput'

class AwardCategoriesContainer extends Component {

  constructor(props) {
    super() 
      this.state = {
        year: "",
        categories: []
      }
  }

  renderInputs = () => {
      if (this.props.categories > 0) {
          for (let i = 0; i < this.props.categories; i++) {
              <CategoryInput />
          }
      }
  }


  render() {

    return (
      <div>
        <p>Categories: {this.props.categories}</p>
        {this.renderInputs()}
      </div>
    );
  }
};

export default AwardCategoriesContainer;