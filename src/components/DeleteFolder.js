import React from 'react';
import { Dropbox } from 'dropbox';
import { token$ } from "./store";
import styles from './css/dropDownModal.module.css';
const DeleteFolder = (props,e) => {
  
  const deleteFileFolder = props.path;
  const deleteFF = (e) =>{
    
    let pathName = window.location.pathname;
    if (pathName.length === 5) {
      pathName = pathName.substring(5);
    } else if (pathName.length === 6) {
      pathName = pathName.substring(6);
    }
   
  const option = {
    fetch: fetch,
    accessToken: token$.value
  };

  const dbx = new Dropbox(
    option,
  );

  dbx.filesDeleteV2({
    path:deleteFileFolder,
  })
  .then(function (response) {
    console.log(response);
    // props.updateFiles(pathName);
  })
  props.updateIsShowing(false)
 }
     
    return (
      <>
        <div className={styles.modalHeader}>
          <span><i className="fas fa-trash" style={{color: "#F44336"}}></i>Delete folder?</span>
          <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={styles.modalBody}>
          <label style={{fontSize: "19px",color: "#67686a"}}> Are you sure you want to delete <strong>{props.name.substring(1)}</strong> from your Dropbox?</label>  
        </div>
        <div className={styles.modalFooter}>
          <button type="button" className={styles.cancelButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}  >Cancel</button>
          <button data-dismiss="modal" aria-label="Close" type="button" className={styles.createButton} onClick={deleteFF}>Delete</button>
        </div>
      </>
    )
  }
export default DeleteFolder;