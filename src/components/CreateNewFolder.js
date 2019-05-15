import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Dropbox } from 'dropbox';
import { token$ } from "./store";
import styles from './css/dropDownModal.module.css';
const CreateNewFolder = (props) => {
 
     
    return (
      <>
        <div className={styles.modalHeader}>
          <span><i className="fas fa-folder"></i>Create New Folder</span>
          <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={styles.modalBody}>
          <label> Name this folder</label>
          <input type="text"  ></input>
  
        </div>
        <div className={styles.modalFooter}>
          <button type="button" className={styles.cancelButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}  >Cancel</button>
          <button type="button" className={styles.createButton}   >Create</button>
        </div>
      </>
    )
  }
  export  default  CreateNewFolder;