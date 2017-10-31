import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Banner />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
