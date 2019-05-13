import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/modal.module.css';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className={styles.modalOverlay} />
    <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className={styles.Modal}>
        <div className={styles.modalHeader}>
          <span><i className="fas fa-folder"></i>     Create New Folder</span>
          <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={styles.modalBody}>
         <label> Name this folder</label>
          <input />
        </div>
        <div className={styles.modalFooter}>
        <button type="button" className={styles.cancelButton} data-dismiss="modal" aria-label="Close" onClick={hide}>Cancel</button>
        <button type="button" className={styles.createButton}>Create</button>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;