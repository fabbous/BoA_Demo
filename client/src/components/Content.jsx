import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <div className="container-fluid" id="content">
    <h3><b>Hello, Farrah </b></h3>
    <h4> Your Loan is in progress </h4>
    <p> Please review the To-Do list for each step in the process and provide us with the required documentation. The steps below will help you easily monitor the progress of your loan.</p>
     </div>
    );
  }
}

export default Content;

