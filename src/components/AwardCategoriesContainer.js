import React, { Component } from 'react';

class AwardCategoriesContainer extends Component {

  constructor(props) {
    super() 
      this.state = {
        year: "",
        categories: []
      }
  }


  render() {

    return (
      <div>
        <p>Categories: {this.props.categories}</p>
      </div>
    );
  }
};

export default AwardCategoriesContainer;