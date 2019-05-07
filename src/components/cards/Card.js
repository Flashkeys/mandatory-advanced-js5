import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {

  function isFolder(tag) {
    if (tag === "folder") {
      return "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png";
    } else {
      return props.src
    }
  }

  function getThumbnail () {
    
  }
  
  return( // img, filename, tag, server_modified, id
    <div className={styles.newCard}>
    {console.log(props)}
      <img className={styles.thumbnail} src={isFolder(props.entry[".tag"])} />
      <p className={styles.fileName}> {props.name} </p>
      <p className={styles.timestamp}> {props.server_modified}</p>

    </div>
  )
}

export default Card