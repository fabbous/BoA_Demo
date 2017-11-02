import React from 'react';
import $ from 'jquery';

class Home extends React.Component {
  constructor () {
    super();

    this.state = {
      fileUploaded: false,
      files: []
    }
  }

  uploadToBox () {
    var form = new FormData();

    var fileToUpload = document.getElementById('myFile').files[0];
    
    form.append('file', fileToUpload)


    form.append('parent_id', '41204063991')

    $.ajax({
        url: 'https://upload.box.com/api/2.0/files/content',
        headers: {Authorization: 'Bearer RrP0AeukCP0s1K2HQIB9vGuF7OiPjC61'},
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',
        data: form
    }).then((response) => {
      const fileName = response.entries[0].name;
      const fileId = response.entries[0].id
      this.setState({
          fileUploaded: true,
          files: this.state.files.concat([[fileName, fileId]])
        });

    }
    )
  }

  render() {
    let files;
    if (this.state.files) {
      files = this.state.files.map((file, idx) => {
        return(
          <p onClick={() => this.previewDoc(file[1])} key={idx}>
            {file[0]}
          </p>
        )
      })
    }

    return (
      <div className="container-fluid">


        <div className="content">
          <h2>Step 3: Upload your loan application</h2>

          <h3 className={this.state.fileUploaded ? "" : "hidden"}>
            Upload successful. Your documents are being stored securely with Bank of America.
          </h3>

          <div>{files}</div>

          <input
            onChange={() => this.uploadToBox()}
            type="file"
            id="myFile"
            />
        </div>
      </div>
    );
  }
}

export default Home;