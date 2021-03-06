import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner.jsx'
import Nav from './components/Nav.jsx'
import Content from './components/Content.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import Upload from './components/Upload.jsx'
import ToDo from './components/ToDo.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Banner />
        <Nav />
        <Content />
        <ProgressBar />
        <ToDo/>
        <Upload />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
