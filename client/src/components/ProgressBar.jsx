import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div className="container" className = "progressbar">
    
        
            <div className="row bs-wizard" >
                
                <div className="col-xs-3 bs-wizard-step complete">
                  <div className="text-center bs-wizard-stepnum">Step 1</div>
                  <div className="progress"><div className="progress-bar"></div></div>
                  <a href="#" className="bs-wizard-dot"></a>
                  <div className="bs-wizard-info text-center">Enter contact information </div>
                </div>
                
                <div className="col-xs-3 bs-wizard-step active">
                  <div className="text-center bs-wizard-stepnum">Step 2</div>
                  <div className="progress"><div className="progress-bar"></div></div>
                  <a href="#" className="bs-wizard-dot"></a>
                  <div className="bs-wizard-info text-center">Upload documents</div>
                </div>
                
                <div className="col-xs-3 bs-wizard-step disabled">
                  <div className="text-center bs-wizard-stepnum">Step 3</div>
                  <div className="progress"><div className="progress-bar"></div></div>
                  <a href="#" className="bs-wizard-dot"></a>
                  <div className="bs-wizard-info text-center"> Submit application </div>
                </div>

            </div>
            <hr />
        
        
        
        
        
  </div>


    );
  }
}

export default ProgressBar;

