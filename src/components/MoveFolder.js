import React, { useState, useEffect } from 'react';
import { Dropbox } from 'dropbox';
import { token$ } from "./store";
import styles from './css/dropDownModal.module.css';

const MoveFolder = (props) => {
  const [entries, updateEntries] = useState([]);
  const tag = 'props.tag';
  console.log(tag);

  const option = {
    fetch: fetch,
    accessToken: token$.value
  };

  const dbx = new Dropbox(
    option,
  );
  const pathName = window.location.pathname;
  console.log(entries[".tag"]);

  
  function updateFiles(pathName) {
    const fixedPathName = pathName.substring(5);
    dbx.filesListFolder({ path: decodeURI(fixedPathName) })
      .then((res) => {
        updateEntries(res.entries);
        console.log(res.entries);

      })

  }

  useEffect(() => {
    updateFiles(pathName);

  }, [pathName]);

  // if (tag === 'folder') {
    return (
      <>
        
          <>
            <div className={styles.modalHeader}>
              <span><i className="fas fa-arrows-alt"></i>Move Folder</span>
              <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className={styles.modalBody}>
              <table>
                <tbody>
                  {entries.map((entry) => (
                    <tr
                      key={entry.id}
                      id={entry.id}
                    >
                      <td>
                        <i className="fas fa-folder"></i>
                      </td>
                      <td>
                        {entry.name}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.modalFooter}>
              <button type="button" className={styles.cancelButton} data-dismiss="modal" aria-label="Close" onClick={props.togle}  >Cancel</button>
              <button type="button" className={styles.createButton}>Move</button>
            </div>
          </>
      </>
    )
  // }
}
export default MoveFolder;