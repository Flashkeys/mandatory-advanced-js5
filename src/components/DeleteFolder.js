import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Dropbox } from 'dropbox';
import { token$ } from "./store";
import styles from './css/dropDownModal.module.css';
const DeleteFolder = (props) => {
 
     
    return (
      <>
        <div className={styles.modalHeader}>
          <span><i className="fas fa-trash" style={{color: "#F44336"}}></i>Delete folder?</span>
          <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={styles.modalBody}>
          <label style={{fontSize: "19px",color: "#67686a"}}> Are you sure you want to delete <strong>dddd</strong> from your Dropbox?</label>  
        </div>
        <div className={styles.modalFooter}>
          <button type="button" className={styles.cancelButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}  >Cancel</button>
          <button type="button" className={styles.createButton}>Delete</button>
        </div>
      </>
    )
  }
  export  default  DeleteFolder;