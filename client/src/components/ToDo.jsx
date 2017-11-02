import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <div className = "container" id = "todo">
      <p> To keep the loan review moving forward, we need you to complete the items in your To-Do List. After we review your submitted documentation, we'll notify you of our initial credit decision. </p>
      <h4 className = "todo-header"> To-Dos </h4>
      <h5 id="name"> Who: Farrah Bousetta </h5>
      <h5 id = "upload-type"> What: Upload Loan Application </h5>
      <p> Provide loan application for <b>FARRAH BOUSETTA</b>, dated no earlier than 30 days prior to application date.</p>
     </div>
    );
  }
}

export default ToDo;

