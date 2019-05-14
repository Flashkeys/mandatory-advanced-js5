import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Dropbox } from 'dropbox';
import { token$ } from "./store";
import styles from './css/modal.module.css';
import CreateFolder from './CreateFolder';
import UploadFile from './UploadFile';
const Modal = (props) => {
  return (
    <>
      <div className={styles.modalOverlay} />
      <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className={styles.Modal}>
          {props.type === "uploadFile" ? <UploadFile {...props} /> : null}
          {props.type === "createFolder" ? <CreateFolder {...props} /> : null}
        </div>
      </div>
    </>
  )
}
export default Modal
