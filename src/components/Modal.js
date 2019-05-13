import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Dropbox } from 'dropbox';
import { token$ } from "./store";
import styles from './css/modal.module.css';

const Modal = (props) => {
  
  
  return (
    <>
    <div className={styles.modalOverlay} />
      <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className={styles.Modal}>

        {props.type === "uploadFile" ? <UploadFile {...props}/> : null}
        {props.type === "createFolder" ? <CreateFolder {...props}/> : null}
        {/* <CreateFolder {...props}/>
        <UploadFile {...props}/> */}
        </div>
      </div>

      </>
  )
}

export default Modal

const CreateFolder = (props) =>{
  const [input, updateInput] = useState('');
console.log(input);

const changeInput = (e) => {
  updateInput(e.target.value)
 
  
}
  console.log("createfolder");

  const createFolders = () =>{

  const option = {
    fetch: fetch,
    accessToken: token$.value,

  };
  const dbx = new Dropbox(
    option,
  );
  dbx.filesCreateFolderV2({
    path: '/home' + 'test',
  })
  .then(response => { 
    console.log(response)
  })
  }
  return (
    <>
      <div className={styles.modalHeader}>
            <span><i className="fas fa-folder"></i>     Create New Folder</span>
            <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close"  onClick={props.togle}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className={styles.modalBody}>
            <label> Name this folder</label>
            <input type="text"   onChange={changeInput}></input>

          </div>
          <div className={styles.modalFooter}>
            <button type="button" className={styles.cancelButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}  >Cancel</button>
            <button type="button" className={styles.createButton} onClick={createFolders} >Create</button>
          </div>
    </>
  )
}
const UploadFile = (props) =>{
  return (
    <>
    <div> upload</div>
    </>
  )
}








// const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

//   <React.Fragment>
//     <div className={styles.modalOverlay} />
//     <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
//       <div className={styles.Modal}>
//         <div className={styles.modalHeader}>
//           <span><i className="fas fa-folder"></i>     Create New Folder</span>
//           <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className={styles.modalBody}>
//          <label> Name this folder</label>
//          <input  type="text"   ></input>

//         </div>
//         <div className={styles.modalFooter}>
//         <button type="button" className={styles.cancelButton} data-dismiss="modal" aria-label="Close" onClick={hide}>Cancel</button>
//         <button type="button" className={styles.createButton} onClick={createFolder}>Create</button>
//         </div>
//       </div>
//     </div>
//   </React.Fragment>, document.body
// ) : null;

// export default Modal;

