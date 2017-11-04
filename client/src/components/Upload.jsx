import React from 'react';
import $ from 'jquery';

import bootstrapFilestyle from 'bootstrap-filestyle';

class Upload extends React.Component {
  constructor () {
    super();

    this.state = {
      fileUploaded: false,
      files: []
    }
  }

  uploadToBox () {
    var form = new FormData();

    var fileToUpload = document.getElementById('file').files[0];
    
    form.append('file', fileToUpload)
    form.append('parent_id', '41430063118')

    $.ajax({
        url: 'https://upload.box.com/api/2.0/files/content',
        headers: {Authorization: 'Bearer sq4kGHnMdxMzx1HRS6sstVlTaR2vgamE'},
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

    return (
      <div className="container-fluid" id="upload">
          <input
            onChange={() => this.uploadToBox()}
            type="file"
            className="filestyle" 
            data-classButton="btn btn-primary" 
            data-input="false" 
            data-buttonText="Upload"
            />
      </div>
    );
  }
}

export default Upload;