import React from 'react';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container" id="banner">
          <h1>
            <b>Loan Application</b>
          </h1>
          <hr></hr>
      </div>
    );
  }
}

export default Banner;
