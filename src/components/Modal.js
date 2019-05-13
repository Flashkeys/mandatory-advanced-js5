import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <span><i class="fas fa-folder"></i>     Create New Folder</span>
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
         <label> Name this folder</label>
          <input />
        </div>
        <div className="modal-footer">
        <button type="button" className="cancel-button" data-dismiss="modal" aria-label="Close" onClick={hide}>Cancel</button>
        <button type="button" className="create-button">Create</button>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;