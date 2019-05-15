import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Dropbox } from 'dropbox';
import { token$ } from "./store";
import styles from './css/modal.module.css';
const CreateFolder = (props) => {

    const pathName = window.location.pathname.substring(5);
    
    
    const [input, updateInput] = useState('');
    console.log(input);
  
    const changeInput = (e) => {
      updateInput(e.target.value)
    }
  
    const createFolders = () => {
  
      const option = {
        fetch: fetch,
        accessToken: token$.value,
      };
      const dbx = new Dropbox(
        option,
      );
      dbx.filesCreateFolderV2({
        path: pathName + "/" + input,
      })
        .then(response => {
          console.log(response)
        })
        
    }
    return (
      <>
        <div className={styles.modalHeader}>
          <span><i className="fas fa-folder"></i>     Create New Folder</span>
          <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={styles.modalBody}>
          <label> Name this folder</label>
          <input type="text" onChange={changeInput}></input>
  
        </div>
        <div className={styles.modalFooter}>
          <button type="button" className={styles.cancelButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}  >Cancel</button>
          <button type="button" className={styles.createButton} onClick={createFolders}  >Create</button>
        </div>
      </>
    )
  }
  export  default  CreateFolder;