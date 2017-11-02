import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <nav className="navbar navbar-default">
  <div className="container-fluid" className = "navigation">
    <ul className="nav navbar-nav">
      <li><a href="#">Accounts</a></li>
      <li><a href="#">Help & Support</a></li>
    </ul>
  </div>
</nav>
    );
  }
}

export default Nav;

