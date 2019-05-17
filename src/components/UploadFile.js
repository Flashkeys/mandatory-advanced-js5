import React, { useState, useRef } from 'react';
import { Dropbox } from 'dropbox';
import { token$ } from "./store";
import styles from './css/modal.module.css';


const UploadFile = (props) => {
  let pathName = window.location.pathname;
  if (pathName.length === 5) {
    pathName = pathName.substring(5);
  } else if (pathName.length === 6 ) {
    pathName = pathName.substring(6);
  }
  
  const fileSizeLimit = 150 * 1024 * 1024;
  const fileRef = useRef(null);
  const [progress, updateProgress] = useState(0);

  const uploadFile = (e) => {
    e.preventDefault();
    const file = fileRef.current.files[0];

    console.log(file);
    const option = {
      fetch: fetch,
      accessToken: token$.value,
    };
    const dbx = new Dropbox(
      option,
    );
    if (file.size < fileSizeLimit) { // File is smaller than 150 Mb - use filesUpload API
      dbx.filesUpload({
        path: pathName + "/" + file.name,
        contents: file,
        onUploadProgress: e => {
          updateProgress(e.loaded / e.total);
        },
        autorename: true,
      })
        .then(function (response) {
          updateProgress(0);
          console.log(response);
          window.location.reload();
        })
        .catch(function (error) {
          updateProgress(0);
          console.error(error);
        });
    } else { // File is bigger than 150 Mb - use filesUploadSession* API
      const maxBlob = 8 * 1000 * 1000; // 8Mb - Dropbox JavaScript API suggested max file / chunk size
      var workItems = [];

      var offset = 0;
      while (offset < file.size) {
        var chunkSize = Math.min(maxBlob, file.size - offset);
        workItems.push(file.slice(offset, offset + chunkSize));
        offset += chunkSize;
      }
    }
  }
  return (
    <>
      <div className={styles.modalHeader}>
        <span><i className="fas fa-file"></i>Upload New File</span>
        <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className={styles.modalBody}>

        <input type="file" ref={fileRef} multiple></input>

      </div>
      <div className={styles.modalFooter}>
        <button type="button" className={styles.cancelButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}  >Cancel</button>
        <button type="button" className={styles.createButton} onClick={uploadFile} >Upload File</button>
      </div>
    </>
  )
}

export default UploadFile;