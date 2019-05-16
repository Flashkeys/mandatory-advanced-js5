import React from 'react';
import styles from './css/dropDownModal.module.css';
import DeleteFolder from './DeleteFolder';
import RenameFolder from './RenameFolder';
import MoveFolder from './MoveFolder';
import CopyFolder from './CopyFolder';
import CreateNewFolder from './CreateNewFolder';
const DropDownModal = (props) => {
  
   
  
  return (
    <>
      <div className={styles.modalOverlay} />
      <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className={styles.Modal}>
          {props.type === "deleteFolder" ? <DeleteFolder {...props} /> : null}
          {props.type === "renameFolder" ? <RenameFolder {...props} /> : null}
          {props.type === "moveFolder" ? <MoveFolder {...props} /> : null}
          {props.type === "copyFolder" ? <CopyFolder {...props} /> : null}
          {props.type === "createNewFolder" ? <CreateNewFolder {...props} /> : null}
        </div>
      </div>
    </>
  )
}
export default DropDownModal
